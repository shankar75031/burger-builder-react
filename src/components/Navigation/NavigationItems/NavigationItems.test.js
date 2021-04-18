import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItem from "../NavigationItem.jsx/NavigationItem";
import NavigationItems from "./NavigationItems";

configure({ adapter: new Adapter() });

describe("<NavigationItems/>", () => {
  it("should render 2 navigation <NavigationItem/> element if not authenticated", () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
});
