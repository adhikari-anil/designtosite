"use client";
import {
  Rating,
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  NumberFormatter,
} from "@mantine/core";

function Cards() {
  return (
    <Card
      shadow="sm"
      style={{
        backgroundColor: "#FFF8F1",
      }}
    >
      <div className="flex flex-col gap-[24px] bg-[#FFF8F1]">
        <Card.Section>
          <Image
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
            height={286}
            alt="Norway"
            style={{
              borderTopLeftRadius: "26px",
              borderTopRightRadius: "26px",
            }}
            className="w-full h-full"
          />
        </Card.Section>
        <div className="flex flex-col gap-[24px]">
          <Text
            style={{
              color: "#767E86",
              fontSize: "28px",
              lineHeight: "100%",
              letterSpacing: "0%",
            }}
          >
            Lisbon, Portugal
          </Text>
          <Rating
            defaultValue={2}
            className="h-[24px] w-[136px]"
            style={{
              height: "24px",
              width: "136px",
            }}
          />
          <Text className="text-[#172432] font-['Rubik'] font-normal text-[16px] sm:text-[18px] leading-[20px] tracking-[0%]">
            5 nights and 4 days in 5 star hotel, breakfast and lunch included.
            Very popular during the renaissance. Passage and going through the
            cites of the world in classical literature.
          </Text>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-[24px]">
            <div className="flex gap-2">
              <Text
                className="flex justify-center items-center font-['Rubik'] font-normal"
                style={{
                  color: "#767E86",
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                From
              </Text>
              <NumberFormatter
                prefix="€ "
                value={500}
                thousandSeparator
                className="text-[#FF7757] flex justify-center items-center text-[32px] lg:text-[18px] xl:text-[40px] font-['Rubik'] font-normal leading-[100%] tracking-[0%]"
              />
            </div>
            <div className="w-[127px]">
              <Button color="#FF7654" fullWidth radius="md">
                Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Cards;
