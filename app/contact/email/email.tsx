import {
  Button,
  Html,
  Head,
  Body,
  Text,
  Heading,
  Preview,
} from "@react-email/components";
import * as React from "react";
import { Contact } from "../components/Form";

interface Props {
  data: Contact;
}

export default function Email({ data }: Props) {
  return (
    <Html>
      <Head />
      <Body>
        <Preview>{data.message}</Preview>
        <Heading>from: {data.email}</Heading>
        <Text>message: {data.message}</Text>
      </Body>
    </Html>
  );
}
