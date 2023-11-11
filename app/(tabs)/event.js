import { Box, Button, FlexBox , ButtonText, ButtonIcon, Center, Heading, Image} from "@gluestack-ui/themed";
import { Header } from "../../components";

const Event= () =>{
  const heading = (
    <Heading
      title="Events"
      size="lg"
      weight="bold"
      color="primary"
      align="center"
    />
  );
  const buttonUpcoming = (
    <Button
      width={150}
      height={50}
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
    >
      <ButtonText>Upcoming</ButtonText>
    </Button>
  );
  const buttonPast = (
    <Button
      width={150}
      height={50}
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
    >
      <ButtonText>Past</ButtonText>
    </Button>
  );
  const buttonExplore = (
    <Button
      size="md"
      variant="solid"
      action="primary"
      isDisabled={false}
      isFocusVisible={false}
    >
      <ButtonText>Explore Events</ButtonText>
    </Button>
  );
  
  return (
      <>
      <Header title={"Events"}/>
      <Box>
          {buttonUpcoming}
          {buttonPast}
      </Box>
      <Box>
          {buttonExplore}
      </Box>
      </>
  );

};
export default Event;