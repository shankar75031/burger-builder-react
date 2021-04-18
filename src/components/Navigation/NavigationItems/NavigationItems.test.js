import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItem from "../NavigationItem.jsx/NavigationItem";
import NavigationItems from "./NavigationItems";

configure({ adapter: new Adapter() });

describe("<NavigationItems/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render 2 navigation <NavigationItem/> element if not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it("should render 3 navigation <NavigationItem/> element if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it("should render logout <NavigationItem/> element if authenticated", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
