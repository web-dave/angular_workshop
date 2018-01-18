import { browser, by, element } from 'protractor';

export class EditPage {
    navigateTo(url = '/') {
        return browser.get(url);
    }

    getUrl() {
        return browser.getCurrentUrl()
    }

    editTitle() {
        let titleInput = element(by.css('#title'))
        titleInput.click()
        titleInput.sendKeys('_libri')
    }

    saveTitle() {
        let btn = element(by.css('#saveBook'))
        btn.click()
    }
}

