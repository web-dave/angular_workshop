import { OrderBtnDirective } from './order-btn.directive';

import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IBook } from './custom-types';
import { bookMock } from './books.service.stub';

@Component({
    selector: 'mock-component',
    template: '<div [orderBtn]="book"></div>',
})
class MockComponent {
    book: IBook = bookMock
}

describe('A component with OrderBtnDirective', () => {
    let fixture: ComponentFixture<MockComponent>;
    let element: DebugElement;
    let inst: OrderBtnDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MockComponent, OrderBtnDirective],
        });

        fixture = TestBed.createComponent(MockComponent);
        element = fixture.debugElement.query(By.directive(OrderBtnDirective));
        inst = element.injector.get(OrderBtnDirective);
    });

    describe('orderBtn', () => {
        it('should be a button', () => {
            expect(inst.orderBtnElement.tagName).toBe('BUTTON');
        });

        it(`should show Buy me: ${bookMock.title}`, () => {
            fixture.detectChanges();
            element.triggerEventHandler('mouseenter', {});
            expect(inst.orderBtnElement.innerText).toBe(`Buy me: ${bookMock.title}`);
        });

        it('should write a console.log if clicked', () => {
            fixture.detectChanges();
            spyOn(console, 'log');
            inst.orderBtnElement.click();
            expect(console.log).toHaveBeenCalledWith('this.orderBtn:', bookMock);
        });
    });
});


