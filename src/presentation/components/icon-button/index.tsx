import type { IconType } from "@/domain/models/profile-data-model";
import { getIcon } from "@/presentation/utils/fa-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  label?: string;
  icon: IconType;
  href: string;
  openNewPage?: boolean;
  customClass?: string;
}

const IconButton = (props: IProps): JSX.Element => {
  return (
    <a
      href={props.href}
      role="link"
      target={props.openNewPage ? "_blank" : "_self"}
      rel="noreferrer"
      className="no-underline text-main-100 font-bold"
    >
      <div
        className={`text-main-100 ${
          props.label ? "mr-2" : ""
        } flex flex-row items-center gap-2 ${props.customClass ?? ""}`}
      >
        <FontAwesomeIcon key={6} size="2x" icon={getIcon(props.icon)} />
        {props.label && props.label}
      </div>
    </a>
  );
};

export default IconButton;
