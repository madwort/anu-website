import { mount } from '@vue/test-utils'
import DashboardApi from '@/components/DashboardApi.vue'
import axios from 'axios';

jest.mock('axios');


describe('checkForError method in DashboardApi.vue', () => {
  it('throws an error if the RPC failed', () => {
    const wrapper = mount(DashboardApi)

    let mockResponse = {
        data: {
            error: {
                message: "Error"
            }
        }
    }
    
    expect(() => {
        wrapper.vm.checkForError(mockResponse);
    }).toThrow(new Error('Error'));
  })
})

describe('getAndSetServerIP method in DashboardApi.vue', () => {
  it('Should get and set server ip', () => {
    const wrapper = mount(DashboardApi)

    const dummy_host = "234.234.324.234"
    const ip = '123.123.123.123'
    const resp = {
        data: {
            result: {
                ip: "123.123.123.123"
            }
        }}
    
    axios.post.mockResolvedValue(resp);
  
    return wrapper.vm.getAndSetServerIP().then(data => expect(wrapper.vm.ip).toEqual(ip));
  })
})
