import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Tailwind>
        <Preview className="font-bold text-3xl">Welcome aboard</Preview>
        <Body style={body}>
          <Container>
            <Text>Hello {name}</Text>
            <Link href="https://codewithmosh.com">www.codewithmosh.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};
// const heading: CSSProperties = {
//   fontSize: "20px",
// };

export default WelcomTemplate;
