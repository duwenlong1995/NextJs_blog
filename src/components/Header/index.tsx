import styles from "./index.module.scss";
import { Icon } from "@ducy/template-react-component-library";

interface headerProps {
  data: any;
}
const Header = ({ data }: headerProps) => {
  return (
    <>
      <div className={styles.header_container}>
        <Icon iconName={"label_icon"} color={"blue"} />
        <div>
          {data.map((item: any) => {
            return (
              <>
                <span>{item.title}</span>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Header;
