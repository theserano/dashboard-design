import {
  Button,
  FormControl,
  FormLabel,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Switch,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import OverviewHeader from "../Overview/OverviewHeader";
import "./settings.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

type Props = {};

const Settings = ({}: Props) => {
  return (
    <div className="settings">
      <OverviewHeader
        title={
          <>
            <h1>Settings</h1>
          </>
        }
      />

      <div className="settings__section">
        <div className="settings__section__tabs">
          <Tabs position="relative" variant="unstyled">
            <TabList>
              <Tab>General</Tab>
              <Tab>Notification</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="2px"
              bg="#546FFF"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel>
                <div style={{ maxWidth: "500px" }}>
                  <label>Language</label>
                  <Menu>
                    <MenuButton
                      as={Button}
                      backgroundColor={`transparent`}
                      border={`1px solid #F5F5F7`}
                      borderRadius={`10px`}
                      rightIcon={<MdKeyboardArrowDown />}
                      fontSize={`12px`}
                      textAlign={`left`}
                      width={`100%`}
                      marginTop={`1rem`}
                      marginBottom={`2rem`}
                    >
                      English (Default)
                    </MenuButton>
                    <MenuList>
                      <MenuItem fontSize={`12px`}>English</MenuItem>
                      <MenuItem fontSize={`12px`}>Spanish</MenuItem>
                      <MenuItem fontSize={`12px`}>German</MenuItem>
                      <MenuItem fontSize={`12px`}>Dutch</MenuItem>
                      <MenuItem fontSize={`12px`}>French</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <div style={{ maxWidth: "500px" }}>
                  <label>Timezone</label>
                  <Menu>
                    <MenuButton
                      as={Button}
                      backgroundColor={`transparent`}
                      border={`1px solid #F5F5F7`}
                      borderRadius={`10px`}
                      rightIcon={<MdKeyboardArrowDown />}
                      fontSize={`12px`}
                      textAlign={`left`}
                      width={`100%`}
                      marginTop={`1rem`}
                      marginBottom={`2rem`}
                    >
                      Lagos, Nigeria
                    </MenuButton>
                    <MenuList>
                      <MenuItem fontSize={`12px`}>Ontario, Canada</MenuItem>
                      <MenuItem fontSize={`12px`}>London, UK</MenuItem>
                      <MenuItem fontSize={`12px`}>Paris, France</MenuItem>
                      <MenuItem fontSize={`12px`}>Dubai, UAE</MenuItem>
                    </MenuList>
                  </Menu>
                </div>
                <Stack direction="row" spacing={4} align="center">
                  <Button
                    fontSize={`14px`}
                    fontWeight={`400`}
                    color={`#141522`}
                    borderColor={`#F5F5F7`}
                    variant={`outline`}
                    padding={`12px 3rem`}
                  >
                    24 Hours
                  </Button>
                  <Button
                    fontSize={`14px`}
                    fontWeight={`400`}
                    color={`#141522`}
                    borderColor={`#F5F5F7`}
                    variant={`outline`}
                    padding={`12px 3rem`}
                  >
                    12 Hours
                  </Button>
                </Stack>
                <Button
                  color={`#fff`}
                  backgroundColor={`#546FFF`}
                  marginTop={`2rem`}
                  fontWeight={`400`}
                  fontSize={`12px`}
                  padding={`12px 4rem`}
                >
                  Save changes
                </Button>
              </TabPanel>
              <TabPanel>
                <Stack margin={`1rem 0 2rem`} direction={`column`} spacing={4}>
                  <FormControl display="flex" alignItems="center" gap={`1rem`}>
                    <Switch
                      isChecked
                      colorScheme="blue"
                      size="lg"
                      id="email-alerts"
                    />
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Message
                    </FormLabel>
                  </FormControl>
                  <FormControl display="flex" alignItems="center" gap={`1rem`}>
                    <Switch colorScheme="blue" size="lg" id="email-alerts" />
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Task Update
                    </FormLabel>
                  </FormControl>
                  <FormControl display="flex" alignItems="center" gap={`1rem`}>
                    <Switch colorScheme="blue" size="lg" id="email-alerts" />
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Task Deadline
                    </FormLabel>
                  </FormControl>
                  <FormControl display="flex" alignItems="center" gap={`1rem`}>
                    <Switch colorScheme="blue" size="lg" id="email-alerts" />
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Mentor Help
                    </FormLabel>
                  </FormControl>
                </Stack>
                <Button
                  color={`#fff`}
                  backgroundColor={`#546FFF`}
                  marginTop={`2rem`}
                  fontWeight={`400`}
                  fontSize={`12px`}
                  padding={`12px 3rem`}
                >
                  Save changes
                </Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
