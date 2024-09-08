import { useNavigation } from '@react-navigation/native';
import logoImg from "@assets/logo.png";
import { Container, Logo, BackIcon, BackButton } from "./styles";

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Readonly<Props>) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('groups');
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon name="chevron-left" />
        </BackButton>
      )}
      
      <Logo source={logoImg} />
    </Container>
  )
}
