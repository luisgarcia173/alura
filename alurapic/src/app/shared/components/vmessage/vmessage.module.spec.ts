import { VMessageModule } from './vmessage.module';

describe('VMessageModule', () => {
  let vmessageModule: VMessageModule;

  beforeEach(() => {
    vmessageModule = new VMessageModule();
  });

  it('should create an instance', () => {
    expect(vmessageModule).toBeTruthy();
  });
});
