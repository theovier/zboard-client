import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faUser as fasUser} from "@fortawesome/free-solid-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

library.add(fasUser);
library.add(farUser);
library.add(faFlag);
library.add(faXmark);

export default FontAwesomeIcon;