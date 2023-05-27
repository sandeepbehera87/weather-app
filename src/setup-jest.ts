import 'zone.js/bundles/zone-testing-bundle.umd';
import { getTestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";
import 'jest-preset-angular/setup-jest'
import { Mock } from 'ts-mockery';

Mock.configure('jest');
getTestBed().resetTestEnvironment();
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: false}
});