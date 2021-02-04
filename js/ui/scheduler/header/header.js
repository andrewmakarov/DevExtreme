// import $ from '../../../core/renderer';
// import { isObject, isDefined } from '../../../core/utils/type';
// import { extend } from '../../../core/utils/extend';
// import { each } from '../../../core/utils/iterator';
// import { inArray } from '../../../core/utils/array';
// import { camelize } from '../../../core/utils/inflector';
// import registerComponent from '../../../core/component_registrator';
// import Widget from '../../widget/ui.widget';
// import { Navigator } from './navigator';
// import DropDownMenu from '../../drop_down_menu';
// import Tabs from '../../tabs';
// import Toolbar from '../../toolbar';
// import { TABS_EXPANDED_CLASS } from '../../tabs/constants';
// import errors from '../../../core/errors';
// import messageLocalization from '../../../localization/message';

// const COMPONENT_CLASS = 'dx-scheduler-header';
// const VIEW_SWITCHER_CLASS = 'dx-scheduler-view-switcher';
// const VIEW_SWITCHER_LABEL_CLASS = 'dx-scheduler-view-switcher-label';

// const STEP_MAP = {
//     day: 'day',
//     week: 'week',
//     workWeek: 'workWeek',
//     month: 'month',
//     timelineDay: 'day',
//     timelineWeek: 'week',
//     timelineWorkWeek: 'workWeek',
//     timelineMonth: 'month',
//     agenda: 'agenda'
// };

// const VIEWS = ['day', 'week', 'workWeek', 'month', 'timelineDay', 'timelineWeek', 'timelineWorkWeek', 'timelineMonth', 'agenda'];


// const _getItemText = (item) => {
//     return item.name || messageLocalization.format('dxScheduler-switcher' + camelize(item.type || item, true));
// };

// // _createViewButtonGroupItem() {
// //     const items = this.option('views').map(viewName => {
// //         return {
// //             key: viewName,
// //             text: _getItemText(viewName)
// //         };
// //     });

// //     return {
// //         location: 'after',
// //         widget: 'dxButtonGroup',
// //         locateInMenu: 'auto',
// //         // locateInMenu: 'always',
// //         options: {
// //             keyExpr: 'key',
// //             items: items,
// //             selectedItemKeys: [this.option('currentView')],
// //             focusStateEnabled: this.option('focusStateEnabled'),

// //             onItemClick: e => this.notifyObserver('currentViewUpdated', e.itemData.key)
// //         }
// //     };
// // }

// const EVENT_NAMES = {
//     CURRENT_VIEW_CHANGED: 'currentViewChanged',
//     VIEWS_CHANGED: 'viewsChanged',
//     TAB_INDEX_CHANGED: 'tabIndexChanged',
//     USE_DROP_DOWN_VIEW_SWITCHER: 'useDropDownViewSwitcherChanged'
// };

// class ViewSwitcher {
//     constructor(onViewClick,) {

//     }

//     createItems() {

//     }
// }

// class ToolbarModel {
//     get currentView() {
//         return this._currentView;
//     }
//     set currentView(value) {
//         this._currentView = value;
//         this.raiseEvent(EVENT_NAMES.CURRENT_VIEW_CHANGED);
//     }

//     get views() {
//         return this._views;
//     }
//     set views(value) {
//         this._views = value;
//         this.raiseEvent(EVENT_NAMES.VIEWS_CHANGED);
//     }

//     get useDropDownViewSwitcher() {
//         return this._useDropDownViewSwitcher;
//     }
//     set useDropDownViewSwitcher(value) {
//         this._useDropDownViewSwitcher = value;
//         this.raiseEvent(EVENT_NAMES.USE_DROP_DOWN_VIEW_SWITCHER);
//     }

//     get tabIndex() {
//         return this._tabIndex;
//     }
//     set tabIndex(value) {
//         this._tabIndex = value;
//         this.raiseEvent(EVENT_NAMES.TAB_INDEX_CHANGED);
//     }

//     constructor(views, currentView, tabIndex, useDropDownViewSwitcher) {
//         this._views = views;
//         this._currentView = currentView;
//         this._tabIndex = tabIndex;
//         this._useDropDownViewSwitcher = useDropDownViewSwitcher;

//         this.eventEmitter = new Map();
//     }

//     on(eventName, callBack) {
//         this.eventEmitter.set(eventName, callBack);
//         return this;
//     }

//     raiseEvent(eventName) {
//         const callBack = this.eventEmitter.get(eventName);
//         callBack && callBack(eventName);
//     }
// }

// class ViewRender {
//     render() {
//     }

//     dispose() {
//     }
// }

// class ToolbarView extends ViewRender {
//     constructor(model, createComponent, container) {
//         super();
//         this.model = model;

//         this.model.on(EVENT_NAMES.CURRENT_VIEW_CHANGED, () => this.render());
//         this.model.on(EVENT_NAMES.USE_DROP_DOWN_VIEW_SWITCHER, () => this.renderItems());

//         this.createComponent = createComponent;
//         this.container = container;

//         this.toolbar = undefined;
//         this.navigatorView = undefined;
//         this.viewSwitcherView = undefined;
//     }

//     render() {
//         if(!this.toolbar) {
//             this.toolbar = this.createComponent(this.container, Toolbar, {}); // TODO
//         }

//         this.toolbar.option('tabIndex', this.model.tabIndex);
//         this.renderItems();
//     }

//     renderItems() {
//         this.navigatorView?.dispose();
//         this.viewSwitcherView?.dispose();

//         this.navigatorView = new NavigatorView(this.model);
//         this.viewSwitcherView = this.model.useDropDownViewSwitcher ?
//             new DropDownViewSwitcherView(this.model) :
//             new ViewSwitcherView(this.model);

//         let items = [];
//         items = items.concat(this.navigatorView.render());
//         items = items.concat(this.viewSwitcherView.render());

//         this.toolbar.option({ items });
//     }

//     dispose() {
//     }
// }

// class ViewSwitcherView extends ViewRender {
//     constructor(model) {
//         super();
//     }
// }

// class DropDownViewSwitcherView extends ViewSwitcherView {
//     constructor(model) {
//         super(model);
//     }
// }

// class NavigatorView {
//     constructor(model) {

//     }
// }

// class ToolbarController {
//     constructor(model, view) {
//         this.model = model;
//     }

//     setCurrentView(value) {
//         this.model.currentView = value;
//     }

//     setViews(value) {
//         this.model.views = value;
//     }

//     setUseDropDownViewSwitcher(value) {
//         this.model.useDropDownViewSwitcher = value;
//     }

//     setTabIndex(value) {
//         this.model.tabIndex = value;
//     }
// }

// export class Header extends Widget {
//     _getDefaultOptions() {
//         return extend(super._getDefaultOptions(), {
//             views: [],
//             isAdaptive: false,
//             intervalCount: 1,
//             currentView: 'day',
//             firstDayOfWeek: undefined,
//             currentDate: new Date(),
//             min: undefined,
//             max: undefined,
//             useDropDownViewSwitcher: false,
//             _dropDownButtonIcon: 'overlay' // TODO
//         });
//     }

//     _setOptionsByReference() {
//         super._setOptionsByReference();

//         extend(this._optionsByReference, {
//             currentView: true
//         });
//     }

//     _optionChanged(args) {
//         const value = args.value;

//         switch(args.name) {
//             case 'views':
//                 this._validateViews();

//                 // TODO
//                 // this._viewSwitcher.option({
//                 //     items: value,
//                 //     selectedItem: this.option('currentView')
//                 // });
//                 break;
//             case 'customizeDateNavigatorText':
//                 this._navigator.option(args.name, value);
//                 break;
//             case 'currentView':
//                 // this._viewSwitcher.option('selectedItem', value); //TODO
//                 this._navigator.option('step', STEP_MAP[this._getCurrentViewType()]);
//                 this._changeViewSwitcherLabelText();
//                 break;
//             case 'currentDate':
//                 this._navigator.option('date', value);
//                 break;
//             case 'displayedDate':
//                 this._navigator.option('displayedDate', value);
//                 break;
//             case 'min':
//             case 'max':
//             case 'firstDayOfWeek':
//             case 'intervalCount':
//                 this._navigator.option(args.name, value);
//                 break;
//             case 'tabIndex':
//             case 'focusStateEnabled':
//                 // this._viewSwitcher.option(args.name, value); //TODO
//                 this._navigator.option(args.name, value);
//                 super._optionChanged(args);
//                 break;
//             case 'useDropDownViewSwitcher':
//                 // this._refreshViewSwitcher(); // TODO
//                 break;
//             default:
//                 super._optionChanged(args);
//         }
//     }

//     _init() {
//         super._init();
//         this.$element().addClass(COMPONENT_CLASS);
//     }

//     _initMarkup() {
//         super._initMarkup();
//         this._createToolbar();
//     }

//     _createToolbar() {
//         this._viewSwitcher = this._createComponent(this.$element(), Toolbar, {
//             items: [
//                 this._createNavigatorItem(),
//                 this._createViewButtonGroupItem()
//             ],
//             tabIndex: this.option('tabIndex')
//         });
//     }

//     _createViewButtonGroupItem() {
//         const items = this.option('views').map(viewName => {
//             return {
//                 key: viewName,
//                 text: _getItemText(viewName)
//             };
//         });

//         return {
//             location: 'after',
//             widget: 'dxButtonGroup',
//             locateInMenu: 'auto',
//             // locateInMenu: 'always',
//             options: {
//                 keyExpr: 'key',
//                 items: items,
//                 selectedItemKeys: [this.option('currentView')],
//                 focusStateEnabled: this.option('focusStateEnabled'),

//                 onItemClick: e => this.notifyObserver('currentViewUpdated', e.itemData.key)
//             }
//         };
//     }

//     _createNavigatorItem() {
//         return {
//             location: 'before',
//             locateInMenu: 'never',
//             template: () => {
//                 this._navigator = this._createNavigator();
//                 return this._navigator.$element();
//             }
//         };
//     }

//     _createNavigator() {
//         return this._createComponent('<div>', Navigator, {
//             min: this.option('min'),
//             max: this.option('max'),
//             intervalCount: this.option('intervalCount'),
//             date: this.option('currentDate'),
//             step: STEP_MAP[this._getCurrentViewType()],
//             firstDayOfWeek: this.option('firstDayOfWeek'),
//             tabIndex: this.option('tabIndex'),
//             focusStateEnabled: this.option('focusStateEnabled'),
//             observer: this.option('observer'),
//             customizeDateNavigatorText: this.option('customizeDateNavigatorText'),
//             todayDate: this.option('todayDate')
//         });
//     }

//     _validateViews() {
//         const views = this.option('views');

//         views.forEach(view => {
//             const isViewIsObject = isObject(view);
//             const viewType = isViewIsObject && view.type ? view.type : view;

//             if(inArray(viewType, VIEWS) === -1) {
//                 errors.log('W0008', viewType);
//             }
//         });
//     }

//     _getCurrentViewType() {
//         const currentView = this.option('currentView');
//         return currentView.type || currentView;
//     }

//     // _refreshViewSwitcher() {
//     //     this._viewSwitcher._dispose();
//     //     this._viewSwitcher.$element().remove();

//     //     delete this._viewSwitcher;

//     //     this._removeViewSwitcherLabel();

//     //     this._renderViewSwitcher();
//     // }

//     _removeViewSwitcherLabel() {
//         if(isDefined(this._$viewSwitcherLabel)) {
//             this._$viewSwitcherLabel.detach();
//             this._$viewSwitcherLabel.remove();

//             delete this._$viewSwitcherLabel;
//         }
//     }

//     _changeViewSwitcherLabelText() {
//         if(!isDefined(this._$viewSwitcherLabel)) {
//             return;
//         }
//         const currentView = this.option('currentView');
//         const currentViewText = _getItemText(currentView);

//         this._$viewSwitcherLabel.text(currentViewText);
//     }

//     _getCurrentViewName(currentView) {
//         return isObject(currentView) ? currentView.name || currentView.type : currentView;
//     }

//     _renderFocusTarget() {}

//     notifyObserver(subject, args) {
//         const observer = this.option('observer');
//         if(observer) {
//             observer.fire(subject, args);
//         }
//     }

//     invoke() {
//         const observer = this.option('observer');

//         if(observer) {
//             return observer.fire.apply(observer, arguments);
//         }
//     }
// }

// registerComponent('dxSchedulerHeader', Header);
