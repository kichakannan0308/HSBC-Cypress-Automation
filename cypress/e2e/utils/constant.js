export const login_variables = {
    LogoLocator: 'div.row img[src="/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg"]',
    LogoVisible: 'be.visible',
    equals: 'eq',
    PageTitle: 'HSBC India - Credit Cards, NRI Services, Saving and Deposit',
    LogOnButton: ':nth-child(5) > .header-dropdown > .selected-item',
    LoginHeader: '.col-sm-12 > .pull-left > span',
    LoginHeaderVisible: 'be.visible',
    ContinueButton: '#username_submit_btn',
    ContinueButtonExist: 'exist',
    ContinueButtonDisabled: 'be.disabled',
    ContinueButtonEnabled: 'be.enabled',
    LoginUser: '#username',
    UserName: 'gowdham1234',
    RememberCheckBox: '#rememberMe',
    NotChecked: 'not.be.checked',
    HelpToolTip: '#username_help_link > [role="text"] > .icon',
    ToolTipVisible: 'be.visible',
    HelpUserNameHeader: 'h3[class="t16b"]',
    HelpUserNameHeaderVisible: 'be.visible',
    HelpClose: 'span[class ="icon icon-delete"]',
    HelpCloseVisible: 'be.visible',
};

export const atm_variables = {
    EndOfPage: 'bottom',
    NearestBranch: 'div.footer-main > div > div > nav > ul > li:nth-child(2) > a',
    Includes:  'include',
    ExpectedURL: '/ways-to-bank/branches/',
    BranchHeaderLocator: '#content_intro_hero_banner_2 > div > h1',
    BranchHeaderVisible: 'be.visible',
    ActualBranchHeader: 'Branches & ATMs',
    BranchButtonLocator: '#content_main_buttons_1 >div > a >span[aria-hidden="true"]',
    InputSearch: '#searchInput',
    Country: 'India',
    DownArrowButton: '{downarrow}',
    EnterButton: '{enter}',
    FirstResultButtonLocator: 'button > p:nth-child(3)',
    ExpectedText: 'Rajbhavan Road',
    ShowMoreResultsButtonLocator: 'div > button.A-BTN.dyDtMFJhIxIve49jQf34.F2AanyfgyiGzuY7KkfBN',
    SecondBranchLocator: 'li:nth-child(2) > button > p.uItFVQvJsoQVBXhG5ERC.RGdv28Je743np867Aqn2.uMnz0NVk0q4GZCWEszUD > span',
    InstagramLocator: 'a.social-icon-instagram',
    FacebookLocator: 'a.social-icon-facebook',
    TwitterLocator: 'a.social-icon-twitter',
    YoutubeLocator: 'a.social-icon-youtube',
    Exist: 'exist',
    LogoLocator: 'div.row img[src="/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg"]',
    Equals: 'eq',
    PageTitle: 'HSBC India - Credit Cards, NRI Services, Saving and Deposit',
    PrivacyLinkLocator: 'div.footer-bottom div > div > nav > ul > li:nth-child(3) > a',
    PrivacyLinkVisible: 'be.visible',
    PrivacyHeaderLocator: '#content_intro_hero_no_image_1 > h1',
    PrivacyHeaderVisible: 'be.visible',
    ActualPrivacyHeader: 'Privacy Statement',
};

export const credit_card_variables = {
    BankingMenu: 'div.header-main-container.hide-on-mobile-and-tablet > div > div >nav > ul > li:nth-child(1)',
    NavigationHeader: 'Banking',
    MouseoverAction: 'mouseover',
    CreditCardLink: 'nav > ul > li:nth-child(1) > div.doormat-menu > div > div.doormat-main.sm-12.lg-9 > div > div:nth-child(1) > div > div:nth-child(1) > a > h2',
    CreditCardsHeaderLocator: '#listing_intro_hero_banner_2 > div > h1',
    ActualHeader: 'Credit cards',
    CreditCardsHeaderVisible: 'be.visible',
    ApplyNowButtonLocator: '#listing_intro_button_1 > span:nth-child(1)',
    ActualApplyNowButton: 'Apply now',
    ApplyNowVisible: 'be.visible',
    NumberOfCardsLocator: "[class='productModule']",
    ContainsLength: 'have.length',
    ActualLength: '3',
    FirstCardImageLocator: '#listing_main_image_3',
    ContainsAttribute: 'have.attr',
    Tag: 'alt',
    ActualAttribute: 'HSBC Visa Cashback Credit Card',
    FirstCreditCardHeaderLocator: '#listing_main_creditCardProductModule_1 > div.row.product-general > div.sm-12.md-8.lg-5 > h2',
    ActualFirstCreditCardHeader: 'HSBC Cashback Credit Card',
    FirdtCreditCardHeaderVisible: 'be.visible',
    FirstrCompareCardLocator: '#listing_main_button_1 > span',
    FirstCompareCardText: 'Compare cards',
    FirstCompareCardVisible: 'be.visible',
    FirstFindOutMoreLocator: '#listing_main_button_2 > span:nth-child(1)',
    FirstFindOutMoreText: 'Find out more',
    FirstFindOutMoreVisible: 'be.visible',
    FirstApplyNowLocator: '#listing_main_button_3 > span:nth-child(1)',
    FirstApplyNowText: 'Apply now',
    FirstApplyNowVisible: 'be.visible',
    CompareClosePopUp: '#pp_tools_productComparator_1 > div.modal-window.is-visible > div.main-modal > div > div > button',
    CompareClosePopUpVisible: 'be.visible',
    SelectCardsToCompareHeaderLocator: '#title-pp_tools_productComparator_4',
    SelectCardsToCompareHeaderVisible: 'be.visible',
    PopupFirstCardLocator: '[data-product-type="premier-mastercard-credit-card"]',
    PopupSecondCardLocator: '[data-product-type="cashback-credit-card"]',
    PopupThirdCardLocator: '[data-product-type="visa-platinum-credit-card"]',
    PopupFirstCardVisible: 'be.visible',
    PopupSecondCardVisible: 'be.visible',
    PopupThirdCardVisible: 'be.visible',
    FirstCardSelect: '[data-product-type="premier-mastercard-credit-card"] div[role="checkbox"]',
    SecondCardSelect: '[data-product-type="cashback-credit-card"] div[role="checkbox"]',
    CompareButtonLocator: 'button[class="A-BTNP-RW-ALL"]',
    TotalCardsAvailableLocator: 'div[class="product-select-container"] div[class="product-select"]',
    SelectedCardRemovalLink: 'div[class="product-select-container"] div[class="product-select"] a[data-event-name]',
    TopOfThePage: 'top',
    AddCardLinkLocator: 'div[class="product-select-container"] div:nth-child(3)',
    AddCardVisible: 'be.visible',
    ThirdCardSelect: '[data-product-type="visa-platinum-credit-card"] div[role="checkbox"]',
    ThirdCardremovalLink: 'a[data-product-type="visa-platinum-credit-card"]',
    ThirdCardRemovalVisible: 'be.visible',
    PopupCloseButton: 'button[class="close-button"]',
    PopupCloseButtonNotVisible: 'not.be.visible',
};