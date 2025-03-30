import { Card, Image, Text } from "@mantine/core";

function ImageCard() {
  return (
    <Card shadow="md" padding="xl" className="border-amber-100">
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={350}
          alt="No way!"
          style={{
            borderRadius: "26px",
          }}
        />
      </Card.Section>
    </Card>
  );
}

export default ImageCard;
