import { getbaseurl } from "../../config";
import { login_variables } from "../utils/constant";
import { routerlist } from "../router.const";

describe('To validate the functionalities of Login HSBC', () => {
  beforeEach(() => {
    cy.viewport(1123, 740);
  });

  it('To access the HSBC URL', () => {
    cy.visit(`${getbaseurl()}`);
  });

  it('checks visibility of HSBC logo', () => {
    cy.visit(`${getbaseurl()}`);
    cy.get(login_variables.LogoLocator).should(login_variables.LogoVisible);
  });

  it('checks page title of HSBC India website', () => {
    cy.visit(`${getbaseurl()}`);
    cy.title().should((login_variables.equals), (login_variables.PageTitle) );
  });

  it('To click the button logon', () => {
    cy.visit(`${getbaseurl()}`);
    cy.get(login_variables.LogOnButton).click();
  });

  it('To validate Log On header in Login Page', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.LoginHeader).should(login_variables.LoginHeaderVisible);
  });

  it('To Validate Continue button is available', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.ContinueButton).should(login_variables.ContinueButtonExist);
  });

  it('To Validate Continue button is disabled', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.ContinueButton).should(login_variables.ContinueButtonDisabled);
  });

  it('To Type random email in the username field', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.LoginUser).type(login_variables.UserName);
  });

  it('To Validate Continue button is enabled', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.LoginUser).type(login_variables.UserName);
    cy.get(login_variables.ContinueButton).should(login_variables.ContinueButtonEnabled);
  });

  it('To Validate the Remember me check box is not checked by default', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.RememberCheckBox).should(login_variables.NotChecked);
  });

  it('To Validate Question mark tooltip', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.HelpToolTip).should(login_variables.ToolTipVisible);
  });

  it('To Click on the tooltip', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.HelpToolTip).click();
  });

  it('To Validate the Username header in the new pop-up screen', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.HelpToolTip).click();
    cy.get(login_variables.HelpUserNameHeader).should(login_variables.HelpUserNameHeaderVisible);
  });

  it('To Validate the Close button in the new pop-up screen', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.HelpToolTip).click();
    cy.get(login_variables.HelpClose).should(login_variables.HelpCloseVisible);
  });

  it('To click close button in the new pop-up screen', () => {
    cy.visit(`${getbaseurl()}${routerlist.LOGIN}`);
    cy.get(login_variables.HelpToolTip).click();
    cy.get(login_variables.HelpClose).click();
  });
});