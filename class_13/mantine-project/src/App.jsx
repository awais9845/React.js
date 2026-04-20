import { Badge, Button, Card, Group, Image, Text } from "@mantine/core";
import React from "react";
import { Dropzone } from "@mantine/dropzone";
import Counter from "./components/Counter";
import UpdateName from "./components/UpdateName";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      {/* <Card shadow="sm" className="w-[20%]" padding="lg" withBorder>
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Norway Fjord Adventures</Text>
          <Badge color="pink">On Sale</Badge>
        </Group>

        <Text size="sm" c="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes
          with tours and activities on and around the fjords of Norway
        </Text>

        <Button color="blue" fullWidth mt="md">
          Book classic tour now
        </Button>
      </Card> */}

      {/* <Button size="compact-md">Compact md</Button>
      <Dropzone disabled className={classes.disabled} onDrop={() => {}}>
        children...
      </Dropzone> */}
      <Counter />
      <UpdateName />
    </div>
  );
};

export default App;
