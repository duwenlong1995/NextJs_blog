"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";
import { Box, Button, Icon, Tabs, TabPanel } from "@ducy/template-react-component-library";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Image from "next/image";
import Label from "../components/Label";
import Card from "../components/Card";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };
  const [slidItems, setSlidItems] = useState([
    {
      tagId: 1,
      type: "HTML",
      icon: "HTML",
      href: "/category?tagId=1",
      list: [],
    },
    {
      tagId: 2,
      type: "CSS",
      icon: "CSS",
      href: "/category?tagId=2",
      list: [],
    },
    {
      tagId: 3,
      type: "JavaScript",
      icon: "JavaScript",
      href: "/category?tagId=3",
      list: [],
    },
    {
      tagId: 4,
      type: "Vue",
      icon: "Vue",
      href: "/category?tagId=4",
      list: [],
    },
    {
      tagId: 5,
      type: "React",
      icon: "React",
      href: "/category?tagId=5",
      list: [],
    },
    {
      tagId: 6,
      type: "HTTP",
      icon: "HTTP",
      href: "/HTTP?tagId=6",
      list: [],
    },
    {
      tagId: 7,
      type: "Node",
      icon: "Node",
      href: "/Node?tagId=7",
      list: [],
    },
    {
      tagId: 8,
      type: "ts",
      icon: "ts",
      href: "/ts?tagId=8",
      list: [],
    },
    {
      tagId: 9,
      type: "webpack",
      icon: "webpack",
      href: "/webpack?tagId=9",
      list: [],
    },
    {
      tagId: 10,
      type: "safe",
      icon: "safe",
      href: "/safe?tagId=10",
      list: [],
    },
    {
      tagId: 11,
      type: "code",
      icon: "code",
      href: "/code?tagId=11",
      list: [],
    },
    {
      tagId: 12,
      type: "computer",
      icon: "computer",
      href: "/computer?tagId=12",
      list: [],
    },
  ]);
  const [cardData, setCardData] = useState([
    {
      color: "#dfefd7",
      title: "Budget Planner Finance App",
      describe:
        "With user-centered approach, the goals was to create an intuitive interface for effortless financial management while incorporating gamification.",
      text: " View case",
      url: "/xiaoxin.jpg",
    },
    {
      color: "#F6E6D3",
      style: { marginTop: "40px" },
    },
    {
      color: "#E6E0EA",
      style: { marginTop: "40px" },
    },
    {
      color: "#D6E9F8",
      style: { marginTop: "40px" },
    },
  ]);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const header_data = [
    {
      title: "Work",
      icon: "arrow_down",
      href: "/work",
    },
    {
      title: "Experience",
      icon: "arrow_down",
      href: "/experience",
    },
    {
      title: "Blog",
      icon: "arrow_down",
      href: "/blog",
    },
  ];
  return (
    <>
      <Box className={styles.container} modifiers={["flex", "flexColumn"]}>
        {/* <Icon iconName={"choose"} color={"blue"} />
        <Icon iconName={"arrow_down"} color={"blue"} /> */}
        <Box className={styles.header}>
          <Header data={header_data}></Header>
        </Box>
        <Box className={styles.main} modifiers={["flex", "flexColumn", "flexJustifyCenter", "flexAlignCenter"]}>
          <Box className={styles.photo_comp} modifiers={["flex", "flexColumn", "flexJustifyCenter", "flexAlignCenter"]}>
            <Box className={styles.photo}></Box>
            <Box className={styles.label}>
              <Label
                type="primary"
                icon="label_icon"
                onClick={() => {
                  console.log("label打印了");
                }}
              >
                Verified Expert
              </Label>
            </Box>
          </Box>
          <h1 className={styles.job}>Framer Developer</h1>
          <Box className={styles.describe}>
            <p> Over a decade of experience in building </p>
            <p>exceptional websites and digital products</p>
          </Box>
          <Box className={styles.button} modifiers={["flex", "flexRow"]}>
            <Button
              type="dynamic"
              icon="arrow_right"
              onClick={() => {
                console.log("按钮打印了");
              }}
            >
              Use this template
            </Button>
            <Button type="secondary" style={{ marginLeft: "10px" }}>
              Get Started
            </Button>
          </Box>
        </Box>
        <Box className={styles.footer} modifiers={["flex", "flexJustifyCenter", "flexAlignCenter"]}>
          <Box className={styles.marquee}>
            <marquee behavior="scroll" direction="left" scrollamount="4">
              {slidItems.map(item => {
                return (
                  <Image
                    key={item.tagId}
                    src={`/images/${item.icon}.svg`}
                    width={30}
                    height={30}
                    style={{ marginLeft: "60px", transform: " scale(1.3)" }}
                    alt="img"
                  />
                );
              })}
            </marquee>
          </Box>
        </Box>
        <Box className={styles.card} modifiers={["flex", "flexColumn", "flexJustifyCenter", "flexAlignCenter"]}>
          {cardData.map((item, index) => {
            return (
              <>
                <Card className={styles.card_container} bgColor={item.color} key={index} style={item.style}>
                  <Box
                    className={styles.left}
                    modifiers={["flex", "flexColumn", "flexJustifySpaceBetween", "flexAlignStart"]}
                  >
                    <Box>
                      <h1>{item.title}</h1>
                      <p>{item.describe}</p>
                    </Box>
                    <Box>
                      <Button
                        type="primary"
                        onClick={() => {
                          console.log("按钮打印了");
                        }}
                      >
                        {item.text}
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    className={styles.right}
                    modifiers={["flex", "flexColumn", "flexJustifySpaceBetween", "flexAlignStart"]}
                  >
                    <Box className={styles.img_border}>
                      <img className={styles.img} src={item.url} alt="图片" />
                    </Box>
                    <Box modifiers={["flex", "flexRow", "flexJustifyCenter"]}>
                      <Box>
                        <p>Usability</p>
                        <h1>85%</h1>
                      </Box>
                      <Box style={{ marginLeft: "160px" }}>
                        <p>User Retention</p>
                        <h1>75%</h1>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
