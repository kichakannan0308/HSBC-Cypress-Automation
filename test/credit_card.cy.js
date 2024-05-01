import { getbaseurl } from "../../config";
import { routerlist } from "../router.const";
import { credit_card_variables } from "../utils/constant";

describe('To validate the functionalities of HSBC Credit Card Test Scenario', () => {
    beforeEach(() => {
      cy.viewport(1123, 740);
    });
  
    it('To access the HSBC URL', () => {
      cy.visit(`${getbaseurl()}`);
    });
    it('To hover cursor on Bank menu Navigation', () => {
      cy.visit(`${getbaseurl()}`);
      cy.get(credit_card_variables.BankingMenu).contains(credit_card_variables.NavigationHeader).trigger(credit_card_variables.MouseoverAction).click();
    });
    it('To click on credit card link', () => {
        cy.visit(`${getbaseurl()}`);
        cy.get(credit_card_variables.BankingMenu).contains(credit_card_variables.NavigationHeader).trigger(credit_card_variables.MouseoverAction).click();
        cy.get(credit_card_variables.CreditCardLink).click();
    });
    it('To validate Credit Card as header text', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.CreditCardsHeaderLocator).contains(credit_card_variables.ActualHeader);
        cy.get(credit_card_variables.CreditCardsHeaderLocator).should(credit_card_variables.CreditCardsHeaderVisible);
    });
    it('To validate Apply Now button', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.ApplyNowButtonLocator).contains(credit_card_variables.ActualApplyNowButton);
        cy.get(credit_card_variables.ApplyNowButtonLocator).should(credit_card_variables.ApplyNowVisible);
    });
    it('To validate there are Three types of credit card options are available', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.NumberOfCardsLocator).should((credit_card_variables.ContainsLength),(credit_card_variables.ActualLength));
    });
    it('To validate first credit card image attribute is HSBC Visa Cashback Credit Card', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstCardImageLocator).should((credit_card_variables.ContainsAttribute),(credit_card_variables.Tag), (credit_card_variables.ActualAttribute));
    });
    it('To validate first credit card header text is HSBC Cashback Credit Card', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstCreditCardHeaderLocator).contains(credit_card_variables.ActualFirstCreditCardHeader);
        cy.get(credit_card_variables.FirstCreditCardHeaderLocator).should(credit_card_variables.FirdtCreditCardHeaderVisible);
    });
    it('To validate first card has attached Compare Cards button', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).should(credit_card_variables.FirstCompareCardVisible);
    });
    it('To validate first card has attached Find out more button', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstFindOutMoreLocator).contains(credit_card_variables.FirstFindOutMoreText);
        cy.get(credit_card_variables.FirstFindOutMoreLocator).should(credit_card_variables.FirstFindOutMoreVisible);
    });
    it('To validate first card has attached Apply Now button', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstApplyNowLocator).contains(credit_card_variables.FirstApplyNowText);
        cy.get(credit_card_variables.FirstApplyNowLocator).should(credit_card_variables.FirstApplyNowVisible);
    });
    it('To click on first credit card Compare Card button', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
    });
    it('To validate the new pop up has a close button', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.CompareClosePopUp).should(credit_card_variables.CompareClosePopUpVisible);
    });
    it('To validate select cards to compare is header of the pop up', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.SelectCardsToCompareHeaderLocator).should(credit_card_variables.SelectCardsToCompareHeaderVisible);
    });
    it('To validate that there are three credit card options available in the pop up to compare', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.PopupFirstCardLocator).scrollIntoView().should(credit_card_variables.PopupFirstCardVisible);
        cy.get(credit_card_variables.PopupSecondCardLocator).scrollIntoView().should(credit_card_variables.PopupSecondCardVisible);
        cy.get(credit_card_variables.PopupThirdCardLocator).scrollIntoView().should(credit_card_variables.PopupThirdCardVisible);
    });
    it('To check first and second credit card checkbox to compare', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
    });
    it('To click on compare button', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
    });
    it('To validate two credit cards have been selected', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.get(credit_card_variables.TotalCardsAvailableLocator).should((credit_card_variables.ContainsLength), 2);
    });
    it('To validate two remove links are present for both the credit cards', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.get(credit_card_variables.SelectedCardRemovalLink).should((credit_card_variables.ContainsLength), 2);
    });
    it('To click on add card', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.wait(1000);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
    });
    it('To add third card checkbox to compare', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.wait(1000);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
    });
    it('To validate total three cards have been selected', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.wait(1000);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.ThirdCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.TotalCardsAvailableLocator).should((credit_card_variables.ContainsLength), 3);
    });
    it('To validate total three remove links are present', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.wait(1000);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.ThirdCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.SelectedCardRemovalLink).should((credit_card_variables.ContainsLength), 3);
    });
    it('To click on any one of the remove link', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.wait(1000);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.ThirdCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.ThirdCardremovalLink).should(credit_card_variables.ThirdCardRemovalVisible).click();
    });
    it('To validate only two credit card options available in the page', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.wait(1000);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.ThirdCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.ThirdCardremovalLink).should(credit_card_variables.ThirdCardRemovalVisible).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.TotalCardsAvailableLocator).should((credit_card_variables.ContainsLength), 2);
    });
    it('To click on add again', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.wait(1000);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.ThirdCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.ThirdCardremovalLink).should(credit_card_variables.ThirdCardRemovalVisible).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.TotalCardsAvailableLocator).should((credit_card_variables.ContainsLength), 2);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
    });
    it('To click close button in pop up', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.wait(1000);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.ThirdCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.ThirdCardremovalLink).should(credit_card_variables.ThirdCardRemovalVisible).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.TotalCardsAvailableLocator).should((credit_card_variables.ContainsLength), 2);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.PopupCloseButton).click();
    });
    it('To validate pop up is closed successfully', () => {
        cy.visit(`${getbaseurl()}${routerlist.CREDIT_CARDS}`);
        cy.get(credit_card_variables.FirstrCompareCardLocator).contains(credit_card_variables.FirstCompareCardText);
        cy.get(credit_card_variables.FirstrCompareCardLocator).click();
        cy.get(credit_card_variables.FirstCardSelect).click();
        cy.get(credit_card_variables.SecondCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.wait(1000);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.ThirdCardSelect).click();
        cy.get(credit_card_variables.CompareButtonLocator).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.ThirdCardremovalLink).should(credit_card_variables.ThirdCardRemovalVisible).click();
        cy.scrollTo(credit_card_variables.TopOfThePage);
        cy.get(credit_card_variables.TotalCardsAvailableLocator).should((credit_card_variables.ContainsLength), 2);
        cy.get(credit_card_variables.AddCardLinkLocator).should(credit_card_variables.AddCardVisible).click();
        cy.get(credit_card_variables.PopupCloseButton).click();
        cy.get(credit_card_variables.PopupCloseButton).should(credit_card_variables.PopupCloseButtonNotVisible);
    });
});