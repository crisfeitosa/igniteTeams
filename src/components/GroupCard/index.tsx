
import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: Readonly<Props>) {
  return (
    <Container {...rest}>
      <Icon name="users" />
     <Title>{title}</Title>
    </Container>
  )
}
