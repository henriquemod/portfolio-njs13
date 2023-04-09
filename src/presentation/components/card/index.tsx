import { type IconType } from "@/domain/models/profile-data-model";
import { getIcon } from "@/presentation/utils/fa-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "../box";
import Tag from "../tag";

export interface Action {
  url: string;
  icon: IconType;
}

interface IProps {
  title: string;
  message: string;
  tags: string[];
  actions?: Action[];
  id?: string;
  mb?: 1 | 2 | 3 | 4;
}

const Card = (props: IProps): JSX.Element => {
  return (
    <Box id={props.id} sized>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <FontAwesomeIcon
            size="xl"
            icon={faFolder}
            className="text-main-100"
          />
          <div>
            {props.actions?.map((action, i) => (
              <a
                className="no-underline text-dark ml-5"
                key={i}
                href={action.url}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon size="lg" icon={getIcon(action.icon)} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col my-2 text-gray-100">
          <h1 className="text-main-100 text-xl font-bold mb-1 sm:text-2xl">
            {props.title}
          </h1>
          <p className="indent-6 line-clamp-5 sm:text-xl">{props.message}</p>
        </div>
      </div>
      <div className="sm:flex flex-wrap">
        {props.tags.map((tag, i) => (
          <Tag key={i} label={tag} />
        ))}
      </div>
    </Box>
  );
};

export default Card;
