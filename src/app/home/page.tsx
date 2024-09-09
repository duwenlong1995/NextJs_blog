"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import OffscreenKeepAlive from "../../components/Keepalive";
import { Box, Tabs, TabPanel } from "@ducy/template-react-component-library";

const Home = () => {
  // const [count, setCount] = useState(0)
  // const position = useMousePosition()
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  // const handleClick = (e: any) => setValue(e.target.value);
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <Box className={styles.home_container}>
        <OffscreenKeepAlive active={isActive}>
          <Tabs location="middle" defaultTabKey="tab1" footer>
            <TabPanel tabKey="tab1" label="基础页">
              <input type="text" value={value} onChange={e => setValue(e.target.value)} />
            </TabPanel>
            <TabPanel tabKey="tab2" label="增强页">
              <input type="text" value={value2} onChange={e => setValue2(e.target.value)} />
            </TabPanel>
            <TabPanel tabKey="tab3" label="扩展页">
              <input type="text" value={value3} onChange={e => setValue3(e.target.value)} />
            </TabPanel>
          </Tabs>
        </OffscreenKeepAlive>
      </Box>
    </>
  );
};
export default Home;
