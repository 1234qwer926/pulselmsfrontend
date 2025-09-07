// HeaderMegaMenu.jsx (Adapted navigation for PULSE Pharma LMS, with dark mode adjustments)
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Link } from 'react-router-dom';
import classes from './HeaderMegaMenu.module.css';

const mockdata = [
  {
    icon: IconCode,
    title: 'Course Creation',
    description: 'Build learning and assignment JotForms with drag-and-drop ease',
  },
  {
    icon: IconCoin,
    title: 'Group Management',
    description: 'Create groups and assign users efficiently',
  },
  {
    icon: IconBook,
    title: 'Course Assignment',
    description: 'Map content to courses and assign to groups',
  },
  {
    icon: IconFingerprint,
    title: 'User Access',
    description: 'Secure login and personalized course views',
  },
  {
    icon: IconChartPie3,
    title: 'Analytics',
    description: 'View detailed analytics by group and course',
  },
  {
    icon: IconNotification,
    title: 'Submissions',
    description: 'Track assignment submissions and scores',
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md" color={isDark ? 'dark.4' : 'gray'}>
          <item.icon size={22} color={isDark ? theme.colors.blue[3] : theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500} c={isDark ? 'white' : 'black'}>
            {item.title}
          </Text>
          <Text size="xs" c={isDark ? 'gray.4' : 'dimmed'}>
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box>
      <header className={classes.header} style={{ backgroundColor: isDark ? theme.colors.dark[7] : 'white' }}>
        <Group justify="space-between" h="100%">
          {/* <MantineLogo size={30} inverted={isDark} />  */}
          <h2 size={30}>LMS</h2>
          <Group h="100%" gap={0} visibleFrom="sm">
            <Link to="/" className={classes.link}>
              Home
           </Link>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown size={16} color={isDark ? theme.colors.blue[3] : theme.colors.blue[6]} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden', backgroundColor: isDark ? theme.colors.dark[6] : 'white' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500} c={isDark ? 'white' : 'black'}>Features</Text>
                  <Anchor href="#" fz="xs" c={isDark ? 'gray.4' : 'black'}>
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm" />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter} style={{ backgroundColor: isDark ? theme.colors.dark[7] : theme.colors.gray[0] }}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm" c={isDark ? 'white' : 'black'}>
                        Get started
                      </Text>
                      <Text size="xs" c={isDark ? 'gray.4' : 'dimmed'}>
                        Start building your pharma LMS today
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link to="/lmsdashboard" className={classes.link}>
              LMS Dashboard
             </Link>
            <Link to="/course" className={classes.link}>
              Courses
            </Link>
            <Link to="/analyticdashboard" className={classes.link}>
              Analytics
            </Link>
          </Group>

          <Group visibleFrom="sm">
           <Link to="/login"> <Button variant="default">Log in</Button></Link>
            {/* <Button>Sign up</Button> */}
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" color={isDark ? 'white' : 'black'} />
        </Group>
      </header>

      <Drawer
  opened={drawerOpened}
  onClose={closeDrawer}
  size="100%"
  padding="md"
  title="Menu"
  hiddenFrom="sm"
  zIndex={1000000}
  overlayColor={isDark ? theme.colors.dark[9] : theme.colors.gray[2]}
>
  <ScrollArea h="calc(100vh - 80px)" mx="-md">
    <Divider my="sm" />

    <Link to="/" className={classes.link} onClick={closeDrawer}>
      Home
    </Link>

    <UnstyledButton className={classes.link} onClick={toggleLinks}>
      <Center inline>
        <Box component="span" mr={5}>
          Features
        </Box>
        <IconChevronDown size={16} color={isDark ? theme.colors.blue[3] : theme.colors.blue[6]} />
      </Center>
    </UnstyledButton>
    <Collapse in={linksOpened}>{links}</Collapse>

    <Link to="/course" className={classes.link} onClick={closeDrawer}>
      Courses
    </Link>

    <Link to="/analyticdashboard" className={classes.link} onClick={closeDrawer}>
      Analytics
    </Link>

    <Divider my="sm" />

    <Group justify="center" grow pb="xl" px="md">
      <Link to="/login" onClick={closeDrawer}>
        <Button variant="default">Log in</Button>
      </Link>
      <Link to="/signup" onClick={closeDrawer}>
        <Button>Sign up</Button>
      </Link>
    </Group>
  </ScrollArea>
</Drawer>
    </Box>
  );
}
