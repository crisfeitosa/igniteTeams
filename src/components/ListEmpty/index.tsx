import { Container, Message } from "./styles";

type Props = {
  message: string;
}

export function ListEmpty({ message }: Readonly<Props>) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
