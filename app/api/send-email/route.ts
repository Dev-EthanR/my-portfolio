import email from "@/app/contact/email/email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
});

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "anonymous";

    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }
    const body = await request.json();

    if (!body)
      return NextResponse.json(
        { error: "Missing fields: Email, Name, Message" },
        { status: 400 },
      );

    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: "ethanlegend7@gmail.com",
      subject: body.fullName,
      react: email(body),
    });
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: `Failed to send email ${e}` },
      { status: 500 },
    );
  }
}
