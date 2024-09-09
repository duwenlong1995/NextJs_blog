"use client";
import Box from "../../components/components/Box";
import styles from "./page.module.scss";
import Particles from "../../components/Particles";

const Login = () => {
  return (
    <>
      <Box className={styles.login_container} modifiers={["flex", "flexAlignCenter", "flexJustifyCenter"]}>
        <Box className={styles.login_card}></Box>
        <Particles className={styles.login_particles} quantity={200} />
      </Box>
    </>
  );
};
export default Login;
