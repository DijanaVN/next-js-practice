import WelcomTemplate from "@/emails/WelcomTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  resend.emails.send({
    from: "...domain i own",
    to: "veljanovskadijana@yahoo.com",
    subject: "...",
    react: <WelcomTemplate name="Dijana" />,
  });
}
