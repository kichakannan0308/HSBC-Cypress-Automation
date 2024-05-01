import { getbaseurl } from "../../config";
import { routerlist } from "../router.const";
import { atm_variables } from "../utils/constant";

describe('To validate the functionalities of HSBC ATM Search Test Scenario', () => {
    beforeEach(() => {
      cy.viewport(1123, 740);
    });
  
    it('To access the HSBC URL', () => {
      cy.visit(`${getbaseurl()}`);
    });
    it('To scroll down to the bottom of the page', () => {
        cy.visit(`${getbaseurl()}`);
        cy.scrollTo(atm_variables.EndOfPage);
    })
    it('To Click on Find your nearest branch or ATM link in footer section', () => {
        cy.visit(`${getbaseurl()}`);
        cy.get(atm_variables.NearestBranch).click();
    })
    it('To validate new page Url has the expected string', () => {
        cy.visit(`${getbaseurl()}${routerlist.NEAREST_ATM}`);
        cy.url(`${getbaseurl()}${routerlist.NEAREST_ATM}`).should((atm_variables.Includes), (atm_variables.ExpectedURL));
    })
    it('To validate header in new page', () => {
        cy.visit(`${getbaseurl()}${routerlist.NEAREST_ATM}`);
        cy.get(atm_variables.BranchHeaderLocator).should(atm_variables.BranchHeaderVisible);
        cy.get(atm_variables.BranchHeaderLocator).contains(atm_variables.ActualBranchHeader)
    });
    it('To click Branch & ATM Locator Button', () => {
        cy.visit(`${getbaseurl()}${routerlist.NEAREST_ATM}`);
        cy.get(atm_variables.BranchButtonLocator).click();
    })
    it('To Type Country name in search box', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country);
    });  
    it('To Type Country name in search box and Select it', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        });
    });
    it('To validate ATM header name has Rajbhavan Road', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        cy.get(atm_variables.FirstResultButtonLocator).contains(atm_variables.ExpectedText)
        });
    });
    it('To click on show more results button', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        cy.get(atm_variables.ShowMoreResultsButtonLocator).click();
        }); 
    });
    it('To click on second ATM branchas 2 in red color', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        cy.get(atm_variables.ShowMoreResultsButtonLocator).click();
        cy.get(atm_variables.SecondBranchLocator).click();
        }); 
    });
    it('To Check Instagram in social media option in the footer section', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        cy.get(atm_variables.ShowMoreResultsButtonLocator).click();
        cy.get(atm_variables.SecondBranchLocator).click();
        cy.scrollTo(atm_variables.EndOfPage);
        cy.get(atm_variables.InstagramLocator).should(atm_variables.Exist);
        }); 
    });
    it('To Check Facebook in social media option in the footer section', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        cy.get(atm_variables.ShowMoreResultsButtonLocator).click();
        cy.get(atm_variables.SecondBranchLocator).click();
        cy.scrollTo(atm_variables.EndOfPage);
        cy.get(atm_variables.FacebookLocator).should(atm_variables.Exist);
        }); 
    });
    it('To Check Twitter in social media option in the footer section', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        cy.get(atm_variables.ShowMoreResultsButtonLocator).click();
        cy.get(atm_variables.SecondBranchLocator).click();
        cy.scrollTo(atm_variables.EndOfPage);
        cy.get(atm_variables.TwitterLocator).should(atm_variables.Exist);
        }); 
    });
    it('To Check Youtube in social media option in the footer section', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        cy.get(atm_variables.ShowMoreResultsButtonLocator).click();
        cy.get(atm_variables.SecondBranchLocator).click();
        cy.scrollTo(atm_variables.EndOfPage);
        cy.get(atm_variables.YoutubeLocator).should(atm_variables.Exist);
        }); 
    });
    it('To click on HSBC Logo in this page', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        cy.get(atm_variables.ShowMoreResultsButtonLocator).click();
        cy.get(atm_variables.SecondBranchLocator).click();
        cy.get(atm_variables.LogoLocator).click()
        }); 
    });
    it('To validate the page is navigated to home page', () => {
        cy.visit(`${getbaseurl()}${routerlist.FIND_BRANCH}`);
        cy.get(atm_variables.InputSearch).click();
        cy.get(atm_variables.InputSearch).type(atm_variables.Country).then(() => {
        cy.get(atm_variables.InputSearch).type(atm_variables.DownArrowButton);
        cy.wait(1000);
        cy.get(atm_variables.InputSearch).type(atm_variables.EnterButton);
        cy.get(atm_variables.ShowMoreResultsButtonLocator).click();
        cy.get(atm_variables.SecondBranchLocator).click();
        cy.get(atm_variables.LogoLocator).click()
        cy.title().should((atm_variables.Equals), (atm_variables.PageTitle))
        }); 
    });
    it('To scroll down to the bottom of the page', () => {
        cy.visit(`${getbaseurl()}`);
        cy.scrollTo(atm_variables.EndOfPage);
    });
    it('To check and click on privacy link', () => {
        cy.visit(`${getbaseurl()}`);
        cy.scrollTo(atm_variables.EndOfPage);;
        cy.get(atm_variables.PrivacyLinkLocator).should(atm_variables.PrivacyLinkVisible);
        cy.get(atm_variables.PrivacyLinkLocator).click();
    });
    it('To validate header in new page', () => {
        cy.visit(`${getbaseurl()}${routerlist.PRIVACY}`);
        cy.get(atm_variables.PrivacyHeaderLocator).should(atm_variables.PrivacyHeaderVisible);
        cy.get(atm_variables.PrivacyHeaderLocator).contains(atm_variables.ActualPrivacyHeader)
    });
});