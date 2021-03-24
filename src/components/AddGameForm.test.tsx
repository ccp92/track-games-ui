import AddGameForm from './AddGameForm';
import { shallow } from 'enzyme';

describe("AddGameForm", () => {
  it("renders all input fields", () => {
    const component = shallow(<AddGameForm />);
    expect(component.find({"data-test": "name-field"}).length).toBe(1)
    expect(component.find({"data-test": "platform-field"}).length).toBe(1)
    expect(component.find({"data-test": "status-field"}).length).toBe(1)
  })
})