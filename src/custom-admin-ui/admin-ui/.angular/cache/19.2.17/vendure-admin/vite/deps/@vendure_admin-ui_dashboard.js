import {
  ADMIN_UI_VERSION,
  CardComponent,
  CardControlsDirective,
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  CdkDropListGroup,
  ChartComponent,
  ClrIconCustomTag,
  CoreModule,
  CustomerLabelComponent,
  DashboardWidgetService,
  DataService,
  DataTable2ColumnComponent,
  DataTable2Component,
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuComponent,
  DropdownTriggerDirective,
  GetLatestOrdersDocument,
  GetOrderChartDataDocument,
  GetOrderSummaryDocument,
  IfPermissionsDirective,
  LocalStorageService,
  LocaleCurrencyPipe,
  LocaleDatePipe,
  MetricType,
  OrderStateLabelComponent,
  PageBlockComponent,
  Permission,
  SharedModule,
  SortOrder,
  TimeAgoPipe,
  TranslatePipe,
  getAppConfig,
  gql,
  require_dayjs_min,
  require_shared_utils,
  titleSetter
} from "./chunk-T6UYM27H.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-PJL2W3S7.js";
import {
  marker
} from "./chunk-GN7J2E6T.js";
import "./chunk-GXCU3QQL.js";
import {
  AsyncPipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-XYJW6SKF.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  NgModule,
  Subject,
  ViewChild,
  ViewContainerRef,
  combineLatest,
  distinctUntilChanged,
  map,
  setClassMetadata,
  shareReplay,
  startWith,
  switchMap,
  tap,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-WNJWT3MX.js";
import {
  __async,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-TXDUYLVM.js";

// ../../../node_modules/@vendure/admin-ui/fesm2022/vendure-admin-ui-dashboard.mjs
var import_shared_utils = __toESM(require_shared_utils(), 1);
var import_dayjs = __toESM(require_dayjs_min(), 1);
var _c0 = ["portal"];
var _c1 = ["*"];
function DashboardWidgetComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
  }
}
function DashboardWidgetComponent_ng_template_3_Template(rf, ctx) {
}
var _c2 = (a0) => ({
  index: a0
});
var _c3 = (a0) => ({
  width: a0
});
function DashboardComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function DashboardComponent_button_9_Template_button_click_0_listener() {
      const widget_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.addWidget(widget_r2.id));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const widget_r2 = ctx.$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(2, 1, (tmp_2_0 = widget_r2.config.title) !== null && tmp_2_0 !== void 0 ? tmp_2_0 : widget_r2.id), " ");
  }
}
function DashboardComponent_div_12_div_1_vdr_dashboard_widget_1_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 22);
    ɵɵlistener("click", function DashboardComponent_div_12_div_1_vdr_dashboard_widget_1_button_11_Template_button_click_0_listener() {
      const width_r7 = ɵɵrestoreView(_r6).$implicit;
      const widget_r8 = ɵɵnextContext(2).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.setWidgetWidth(widget_r8, width_r7));
    });
    ɵɵtext(1);
    ɵɵpipe(2, "translate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const width_r7 = ctx.$implicit;
    const widget_r8 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("disabled", width_r7 === widget_r8.width);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(2, 2, "dashboard.widget-width", ɵɵpureFunction1(5, _c3, width_r7)), " ");
  }
}
function DashboardComponent_div_12_div_1_vdr_dashboard_widget_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "vdr-dashboard-widget", 13)(1, "div", 14)(2, "div", 15);
    ɵɵelement(3, "clr-icon", 16);
    ɵɵelementEnd();
    ɵɵelementStart(4, "vdr-dropdown")(5, "button", 17);
    ɵɵelement(6, "clr-icon", 3);
    ɵɵelementEnd();
    ɵɵelementStart(7, "vdr-dropdown-menu", 4)(8, "h4", 18);
    ɵɵtext(9);
    ɵɵpipe(10, "translate");
    ɵɵelementEnd();
    ɵɵtemplate(11, DashboardComponent_div_12_div_1_vdr_dashboard_widget_1_button_11_Template, 3, 7, "button", 19);
    ɵɵelement(12, "div", 20);
    ɵɵelementStart(13, "button", 8);
    ɵɵlistener("click", function DashboardComponent_div_12_div_1_vdr_dashboard_widget_1_Template_button_click_13_listener() {
      ɵɵrestoreView(_r5);
      const widget_r8 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.removeWidget(widget_r8));
    });
    ɵɵelement(14, "clr-icon", 21);
    ɵɵtext(15);
    ɵɵpipe(16, "translate");
    ɵɵelementEnd()()()()();
  }
  if (rf & 2) {
    const widget_r8 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("widgetConfig", widget_r8.config);
    ɵɵadvance(9);
    ɵɵtextInterpolate(ɵɵpipeBind1(10, 4, "dashboard.widget-resize"));
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.getSupportedWidths(widget_r8.config));
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(16, 6, "dashboard.remove-widget"), " ");
  }
}
function DashboardComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, DashboardComponent_div_12_div_1_vdr_dashboard_widget_1_Template, 17, 8, "vdr-dashboard-widget", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const widget_r8 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.getClassForWidth(widget_r8.width))("cdkDragData", widget_r8);
    ɵɵadvance();
    ɵɵproperty("vdrIfPermissions", widget_r8.config.requiresPermissions || null);
  }
}
function DashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 9);
    ɵɵlistener("cdkDropListDropped", function DashboardComponent_div_12_Template_div_cdkDropListDropped_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.drop($event));
    });
    ɵɵtemplate(1, DashboardComponent_div_12_div_1_Template, 2, 3, "div", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    const rowIndex_r10 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("cdkDropListData", ɵɵpureFunction1(3, _c2, rowIndex_r10));
    ɵɵadvance();
    ɵɵproperty("ngForOf", row_r9)("ngForTrackBy", ctx_r2.trackRowItem);
  }
}
var _c4 = (a0) => ["/orders/", a0];
function LatestOrdersWidgetComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 6)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelement(3, "clr-icon", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const order_r1 = ctx.item;
    ɵɵproperty("routerLink", ɵɵpureFunction1(2, _c4, order_r1.id));
    ɵɵadvance(2);
    ɵɵtextInterpolate(order_r1.code);
  }
}
function LatestOrdersWidgetComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-order-state-label", 8);
  }
  if (rf & 2) {
    const order_r2 = ctx.item;
    ɵɵproperty("state", order_r2.state);
  }
}
function LatestOrdersWidgetComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "vdr-customer-label", 9);
  }
  if (rf & 2) {
    const order_r3 = ctx.item;
    ɵɵproperty("customer", order_r3.customer);
  }
}
function LatestOrdersWidgetComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "localeCurrency");
  }
  if (rf & 2) {
    const order_r4 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(1, 1, order_r4.totalWithTax, order_r4.currencyCode), " ");
  }
}
function LatestOrdersWidgetComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
    ɵɵpipe(1, "timeAgo");
  }
  if (rf & 2) {
    const order_r5 = ctx.item;
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(1, 1, order_r5.orderPlacedAt), " ");
  }
}
function OrderChartWidgetComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2)(1, "button", 3);
    ɵɵlistener("click", function OrderChartWidgetComponent_div_2_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.metricType$.next(ctx_r1.MetricType.OrderTotal));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 4);
    ɵɵlistener("click", function OrderChartWidgetComponent_div_2_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.metricType$.next(ctx_r1.MetricType.OrderCount));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 4);
    ɵɵlistener("click", function OrderChartWidgetComponent_div_2_Template_button_click_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.metricType$.next(ctx_r1.MetricType.AverageOrderValue));
    });
    ɵɵtext(8);
    ɵɵpipe(9, "translate");
    ɵɵelementEnd();
    ɵɵelement(10, "div", 5);
    ɵɵelementStart(11, "button", 3);
    ɵɵlistener("click", function OrderChartWidgetComponent_div_2_Template_button_click_11_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.refresh());
    });
    ɵɵelement(12, "clr-icon", 6);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const activeMetricType_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("active", activeMetricType_r3 === ctx_r1.MetricType.OrderTotal);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 9, "dashboard.metric-order-total-value"), " ");
    ɵɵadvance(2);
    ɵɵclassProp("active", activeMetricType_r3 === ctx_r1.MetricType.OrderCount);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 11, "dashboard.metric-number-of-orders"), " ");
    ɵɵadvance(2);
    ɵɵclassProp("active", activeMetricType_r3 === ctx_r1.MetricType.AverageOrderValue);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 13, "dashboard.metric-average-order-value"), " ");
  }
}
function OrderSummaryWidgetComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 7)(1, "button", 8);
    ɵɵlistener("click", function OrderSummaryWidgetComponent_div_18_Template_button_click_1_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selection$.next({
        timeframe: "day",
        date: ctx_r1.today
      }));
    });
    ɵɵtext(2);
    ɵɵpipe(3, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 9);
    ɵɵlistener("click", function OrderSummaryWidgetComponent_div_18_Template_button_click_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selection$.next({
        timeframe: "day",
        date: ctx_r1.yesterday
      }));
    });
    ɵɵtext(5);
    ɵɵpipe(6, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 9);
    ɵɵlistener("click", function OrderSummaryWidgetComponent_div_18_Template_button_click_7_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selection$.next({
        timeframe: "week"
      }));
    });
    ɵɵtext(8);
    ɵɵpipe(9, "translate");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 9);
    ɵɵlistener("click", function OrderSummaryWidgetComponent_div_18_Template_button_click_10_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.selection$.next({
        timeframe: "month"
      }));
    });
    ɵɵtext(11);
    ɵɵpipe(12, "translate");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const selection_r3 = ctx.ngIf;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵclassProp("active", selection_r3.date === ctx_r1.today);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(3, 12, "dashboard.today"), " ");
    ɵɵadvance(2);
    ɵɵclassProp("active", selection_r3.date === ctx_r1.yesterday);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 14, "dashboard.yesterday"), " ");
    ɵɵadvance(2);
    ɵɵclassProp("active", selection_r3.timeframe === "week");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(9, 16, "dashboard.thisWeek"), " ");
    ɵɵadvance(2);
    ɵɵclassProp("active", selection_r3.timeframe === "month");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(12, 18, "dashboard.thisMonth"), " ");
  }
}
function OrderSummaryWidgetComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵpipe(2, "localeDate");
    ɵɵpipe(3, "localeDate");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const range_r4 = ctx.ngIf;
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ɵɵpipeBind1(2, 2, range_r4.start), " - ", ɵɵpipeBind1(3, 4, range_r4.end), " ");
  }
}
function WelcomeWidgetComponent_div_0_p_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate2(" ", ctx_r0.hideVendureBranding ? "" : "Vendure", " ", ctx_r0.hideVersion ? "" : "Admin UI v" + ctx_r0.version, " ");
  }
}
function WelcomeWidgetComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "h4", 3);
    ɵɵtext(2);
    ɵɵelement(3, "br");
    ɵɵelementStart(4, "small", 4);
    ɵɵtext(5);
    ɵɵpipe(6, "timeAgo");
    ɵɵelementEnd()();
    ɵɵtemplate(7, WelcomeWidgetComponent_div_0_p_7_Template, 2, 2, "p", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const administrator_r2 = ctx.ngIf;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate2(" Welcome, ", administrator_r2.firstName, " ", administrator_r2.lastName, "");
    ɵɵadvance(3);
    ɵɵtextInterpolate1("Last login: ", ɵɵpipeBind1(6, 4, administrator_r2.user.lastLogin), "");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.hideVendureBranding || !ctx_r0.hideVersion);
  }
}
var DashboardWidgetComponent = class _DashboardWidgetComponent {
  ngAfterViewInit() {
    this.loadWidget();
  }
  loadWidget() {
    return __async(this, null, function* () {
      const loadComponentResult = this.widgetConfig.loadComponent();
      const componentType = loadComponentResult instanceof Promise ? yield loadComponentResult : loadComponentResult;
      this.componentRef = this.portal.createComponent(componentType);
      this.componentRef.changeDetectorRef.detectChanges();
    });
  }
  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
  static {
    this.ɵfac = function DashboardWidgetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardWidgetComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DashboardWidgetComponent,
      selectors: [["vdr-dashboard-widget"]],
      viewQuery: function DashboardWidgetComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 5, ViewContainerRef);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.portal = _t.first);
        }
      },
      inputs: {
        widgetConfig: "widgetConfig"
      },
      standalone: false,
      ngContentSelectors: _c1,
      decls: 5,
      vars: 3,
      consts: [["portal", ""], [3, "title"], ["vdrCardControls", ""]],
      template: function DashboardWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "vdr-card", 1);
          ɵɵpipe(1, "translate");
          ɵɵtemplate(2, DashboardWidgetComponent_ng_template_2_Template, 1, 0, "ng-template", 2)(3, DashboardWidgetComponent_ng_template_3_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          let tmp_1_0;
          ɵɵproperty("title", ɵɵpipeBind1(1, 1, (tmp_1_0 = ctx.widgetConfig.title) !== null && tmp_1_0 !== void 0 ? tmp_1_0 : ""));
        }
      },
      dependencies: [CardComponent, CardControlsDirective, TranslatePipe],
      styles: ["[_nghost-%COMP%]{display:block}.card[_ngcontent-%COMP%]{margin-top:0;min-height:200px}.card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardWidgetComponent, [{
    type: Component,
    args: [{
      selector: "vdr-dashboard-widget",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-card [title]="widgetConfig.title ?? '' | translate">
    <ng-template vdrCardControls>
        <ng-content></ng-content>
    </ng-template>
    <ng-template #portal></ng-template>
</vdr-card>
`,
      styles: [":host{display:block}.card{margin-top:0;min-height:200px}.card-header{display:flex;justify-content:space-between}\n"]
    }]
  }], null, {
    widgetConfig: [{
      type: Input
    }],
    portal: [{
      type: ViewChild,
      args: ["portal", {
        read: ViewContainerRef
      }]
    }]
  });
})();
var DashboardComponent = class _DashboardComponent {
  constructor(dashboardWidgetService, localStorageService, changedDetectorRef, dataService) {
    this.dashboardWidgetService = dashboardWidgetService;
    this.localStorageService = localStorageService;
    this.changedDetectorRef = changedDetectorRef;
    this.dataService = dataService;
    this.deletionMarker = "__delete__";
    this.setTitle = titleSetter();
  }
  ngOnInit() {
    this.availableWidgets$ = this.dataService.client.userStatus().stream$.pipe(map(({
      userStatus
    }) => userStatus.permissions), map((permissions) => this.dashboardWidgetService.getAvailableWidgets(permissions)), tap((widgets) => this.widgetLayout = this.initLayout(widgets.map((w) => w.id))));
    this.setTitle("breadcrumb.dashboard");
  }
  getClassForWidth(width) {
    switch (width) {
      case 3:
        return `clr-col-12 clr-col-sm-6 clr-col-lg-3`;
      case 4:
        return `clr-col-12 clr-col-sm-6 clr-col-lg-4`;
      case 6:
        return `clr-col-12 clr-col-lg-6`;
      case 8:
        return `clr-col-12 clr-col-lg-8`;
      case 12:
        return `clr-col-12`;
      default:
        (0, import_shared_utils.assertNever)(width);
    }
  }
  getSupportedWidths(config) {
    return config.supportedWidths || [3, 4, 6, 8, 12];
  }
  setWidgetWidth(widget, width) {
    widget.width = width;
    this.recalculateLayout();
  }
  trackRow(index, row) {
    const id = row.map((item) => `${item.id}:${item.width}`).join("|");
    return id;
  }
  trackRowItem(index, item) {
    return item.config;
  }
  addWidget(id) {
    const config = this.dashboardWidgetService.getWidgetById(id);
    if (config) {
      const width = this.getSupportedWidths(config)[0];
      const widget = {
        id,
        config,
        width
      };
      let targetRow;
      if (this.widgetLayout && this.widgetLayout.length) {
        targetRow = this.widgetLayout[this.widgetLayout.length - 1];
      } else {
        targetRow = [];
        this.widgetLayout?.push(targetRow);
      }
      targetRow.push(widget);
      this.recalculateLayout();
    }
  }
  removeWidget(widget) {
    widget.id = this.deletionMarker;
    this.recalculateLayout();
  }
  drop(event) {
    const {
      currentIndex,
      previousIndex,
      previousContainer,
      container
    } = event;
    if (previousIndex === currentIndex && previousContainer.data.index === container.data.index) {
      return;
    }
    if (this.widgetLayout) {
      const previousLayoutRow = this.widgetLayout[previousContainer.data.index];
      const newLayoutRow = this.widgetLayout[container.data.index];
      previousLayoutRow.splice(previousIndex, 1);
      newLayoutRow.splice(currentIndex, 0, event.item.data);
      this.recalculateLayout();
    }
  }
  initLayout(availableIds) {
    const savedLayoutDef = this.localStorageService.get("dashboardWidgetLayout");
    let layoutDef;
    if (savedLayoutDef) {
      layoutDef = savedLayoutDef.filter((item) => availableIds.includes(item.id));
    }
    return this.dashboardWidgetService.getWidgetLayout(layoutDef);
  }
  recalculateLayout() {
    if (this.widgetLayout) {
      const flattened = this.widgetLayout.reduce((flat, row) => [...flat, ...row], []).filter((item) => item.id !== this.deletionMarker);
      const newLayoutDef = flattened.map((item) => ({
        id: item.id,
        width: item.width
      }));
      this.widgetLayout = this.dashboardWidgetService.getWidgetLayout(newLayoutDef);
      this.localStorageService.set("dashboardWidgetLayout", newLayoutDef);
      setTimeout(() => this.changedDetectorRef.markForCheck());
    }
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardComponent)(ɵɵdirectiveInject(DashboardWidgetService), ɵɵdirectiveInject(LocalStorageService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _DashboardComponent,
      selectors: [["vdr-dashboard"]],
      standalone: false,
      decls: 13,
      vars: 8,
      consts: [[1, "widget-header", "mb-1"], ["vdrDropdownTrigger", "", 1, "btn", "btn-secondary", "btn-sm"], ["shape", "plus"], ["shape", "ellipsis-vertical"], ["vdrPosition", "bottom-right"], ["vdrDropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["cdkDropListGroup", ""], ["class", "clr-row dashboard-row", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListData", "cdkDropListDropped", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["vdrDropdownItem", "", 3, "click"], ["cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "clr-row", "dashboard-row", 3, "cdkDropListDropped", "cdkDropListData"], ["class", "dashboard-item", "cdkDrag", "", 3, "ngClass", "cdkDragData", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["cdkDrag", "", 1, "dashboard-item", 3, "ngClass", "cdkDragData"], [3, "widgetConfig", 4, "vdrIfPermissions"], [3, "widgetConfig"], [1, "flex"], ["cdkDragHandle", "", 1, "drag-handle"], ["shape", "drag-handle", "size", "24"], ["vdrDropdownTrigger", "", 1, "icon-button"], [1, "dropdown-header"], ["vdrDropdownItem", "", 3, "disabled", "click", 4, "ngFor", "ngForOf"], ["role", "separator", 1, "dropdown-divider"], ["shape", "trash", 1, "is-danger"], ["vdrDropdownItem", "", 3, "click", "disabled"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-page-block")(1, "div", 0)(2, "vdr-dropdown")(3, "button", 1);
          ɵɵelement(4, "clr-icon", 2);
          ɵɵtext(5);
          ɵɵpipe(6, "translate");
          ɵɵelement(7, "clr-icon", 3);
          ɵɵelementEnd();
          ɵɵelementStart(8, "vdr-dropdown-menu", 4);
          ɵɵtemplate(9, DashboardComponent_button_9_Template, 3, 3, "button", 5);
          ɵɵpipe(10, "async");
          ɵɵelementEnd()()();
          ɵɵelementStart(11, "div", 6);
          ɵɵtemplate(12, DashboardComponent_div_12_Template, 2, 5, "div", 7);
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵadvance(5);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind1(6, 4, "dashboard.add-widget"), " ");
          ɵɵadvance(4);
          ɵɵproperty("ngForOf", ɵɵpipeBind1(10, 6, ctx.availableWidgets$));
          ɵɵadvance(3);
          ɵɵproperty("ngForOf", ctx.widgetLayout)("ngForTrackBy", ctx.trackRow);
        }
      },
      dependencies: [ClrIconCustomTag, NgClass, NgForOf, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, DropdownComponent, DropdownMenuComponent, DropdownTriggerDirective, DropdownItemDirective, IfPermissionsDirective, PageBlockComponent, DashboardWidgetComponent, AsyncPipe, TranslatePipe],
      styles: [".widget-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-300);text-align:center}.placeholder[_ngcontent-%COMP%]   .version[_ngcontent-%COMP%]{font-size:3em;margin:24px;line-height:1em}.placeholder[_ngcontent-%COMP%]     .clr-i-outline{fill:var(--color-grey-200)}vdr-dashboard-widget[_ngcontent-%COMP%]{margin-bottom:24px}.drag-handle[_ngcontent-%COMP%]{cursor:move}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.dashboard-row[_ngcontent-%COMP%]{padding:0;border-width:1;margin-bottom:6px;transition:padding .2s,margin .2s}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%], .dashboard-row.cdk-drop-list-receiving[_ngcontent-%COMP%]{border:2px dashed var(--color-component-border-200);border-radius:var(--border-radius);padding:6px}.dashboard-row.cdk-drop-list-dragging[_ngcontent-%COMP%]   .dashboard-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardComponent, [{
    type: Component,
    args: [{
      selector: "vdr-dashboard",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-page-block>
    <div class="widget-header mb-1">
        <vdr-dropdown>
            <button class="btn btn-secondary btn-sm" vdrDropdownTrigger>
                <clr-icon shape="plus"></clr-icon>
                {{ 'dashboard.add-widget' | translate }}
                <clr-icon shape="ellipsis-vertical"></clr-icon>
            </button>
            <vdr-dropdown-menu vdrPosition="bottom-right">
                <button
                    vdrDropdownItem
                    *ngFor="let widget of availableWidgets$ | async"
                    (click)="addWidget(widget.id)"
                >
                    {{ (widget.config.title ?? widget.id) | translate }}
                </button>
            </vdr-dropdown-menu>
        </vdr-dropdown>
    </div>
    <div cdkDropListGroup>
        <div
            class="clr-row dashboard-row"
            *ngFor="let row of widgetLayout; index as rowIndex; trackBy: trackRow"
            cdkDropList
            (cdkDropListDropped)="drop($event)"
            cdkDropListOrientation="horizontal"
            [cdkDropListData]="{ index: rowIndex }"
        >
            <div
                *ngFor="let widget of row; trackBy: trackRowItem"
                class="dashboard-item"
                [ngClass]="getClassForWidth(widget.width)"
                cdkDrag
                [cdkDragData]="widget"
            >
                <vdr-dashboard-widget
                    *vdrIfPermissions="widget.config.requiresPermissions || null"
                    [widgetConfig]="widget.config"
                >
                    <div class="flex">
                        <div class="drag-handle" cdkDragHandle>
                            <clr-icon shape="drag-handle" size="24"></clr-icon>
                        </div>
                        <vdr-dropdown>
                            <button class="icon-button" vdrDropdownTrigger>
                                <clr-icon shape="ellipsis-vertical"></clr-icon>
                            </button>
                            <vdr-dropdown-menu vdrPosition="bottom-right">
                                <h4 class="dropdown-header">{{ 'dashboard.widget-resize' | translate }}</h4>
                                <button
                                    vdrDropdownItem
                                    [disabled]="width === widget.width"
                                    *ngFor="let width of getSupportedWidths(widget.config)"
                                    (click)="setWidgetWidth(widget, width)"
                                >
                                    {{ 'dashboard.widget-width' | translate : { width: width } }}
                                </button>
                                <div class="dropdown-divider" role="separator"></div>
                                <button vdrDropdownItem (click)="removeWidget(widget)">
                                    <clr-icon shape="trash" class="is-danger"></clr-icon>
                                    {{ 'dashboard.remove-widget' | translate }}
                                </button>
                            </vdr-dropdown-menu>
                        </vdr-dropdown>
                    </div>
                </vdr-dashboard-widget>
            </div>
        </div>
    </div>
</vdr-page-block>
`,
      styles: [".widget-header{display:flex;justify-content:flex-end}.placeholder{color:var(--color-grey-300);text-align:center}.placeholder .version{font-size:3em;margin:24px;line-height:1em}.placeholder ::ng-deep .clr-i-outline{fill:var(--color-grey-200)}vdr-dashboard-widget{margin-bottom:24px}.drag-handle{cursor:move}.cdk-drag-preview{box-sizing:border-box;border-radius:4px}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.dashboard-row{padding:0;border-width:1;margin-bottom:6px;transition:padding .2s,margin .2s}.dashboard-row.cdk-drop-list-dragging,.dashboard-row.cdk-drop-list-receiving{border:2px dashed var(--color-component-border-200);border-radius:var(--border-radius);padding:6px}.dashboard-row.cdk-drop-list-dragging .dashboard-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"]
    }]
  }], () => [{
    type: DashboardWidgetService
  }, {
    type: LocalStorageService
  }, {
    type: ChangeDetectorRef
  }, {
    type: DataService
  }], null);
})();
var dashboardRoutes = [{
  path: "",
  component: DashboardComponent,
  pathMatch: "full"
}];
var GET_LATEST_ORDERS = gql`
    query GetLatestOrders($options: OrderListOptions) {
        orders(options: $options) {
            items {
                id
                createdAt
                updatedAt
                type
                orderPlacedAt
                code
                state
                total
                totalWithTax
                currencyCode
                customer {
                    id
                    firstName
                    lastName
                }
            }
        }
    }
`;
var LatestOrdersWidgetComponent = class _LatestOrdersWidgetComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.latestOrders$ = this.dataService.query(GetLatestOrdersDocument, {
      options: {
        take: 10,
        filter: {
          active: {
            eq: false
          },
          state: {
            notIn: ["Cancelled", "Draft"]
          }
        },
        sort: {
          orderPlacedAt: SortOrder.DESC
        }
      }
    }).refetchOnChannelChange().mapStream((data) => data.orders.items);
  }
  static {
    this.ɵfac = function LatestOrdersWidgetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LatestOrdersWidgetComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _LatestOrdersWidgetComponent,
      selectors: [["vdr-latest-orders-widget"]],
      standalone: false,
      decls: 17,
      vars: 20,
      consts: [["id", "latest-orders-widget-list", 3, "items"], ["id", "code", 3, "heading"], ["id", "state", 3, "heading", "hiddenByDefault"], ["id", "customer", 3, "heading", "hiddenByDefault"], ["id", "total", 3, "heading"], ["id", "placed-at", 3, "heading"], [1, "button-ghost", 3, "routerLink"], ["shape", "arrow right"], [3, "state"], [3, "customer"]],
      template: function LatestOrdersWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "vdr-data-table-2", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "vdr-dt2-column", 1);
          ɵɵpipe(3, "translate");
          ɵɵtemplate(4, LatestOrdersWidgetComponent_ng_template_4_Template, 4, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(5, "vdr-dt2-column", 2);
          ɵɵpipe(6, "translate");
          ɵɵtemplate(7, LatestOrdersWidgetComponent_ng_template_7_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(8, "vdr-dt2-column", 3);
          ɵɵpipe(9, "translate");
          ɵɵtemplate(10, LatestOrdersWidgetComponent_ng_template_10_Template, 1, 1, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(11, "vdr-dt2-column", 4);
          ɵɵpipe(12, "translate");
          ɵɵtemplate(13, LatestOrdersWidgetComponent_ng_template_13_Template, 2, 4, "ng-template");
          ɵɵelementEnd();
          ɵɵelementStart(14, "vdr-dt2-column", 5);
          ɵɵpipe(15, "translate");
          ɵɵtemplate(16, LatestOrdersWidgetComponent_ng_template_16_Template, 2, 3, "ng-template");
          ɵɵelementEnd()();
        }
        if (rf & 2) {
          ɵɵproperty("items", ɵɵpipeBind1(1, 8, ctx.latestOrders$));
          ɵɵadvance(2);
          ɵɵproperty("heading", ɵɵpipeBind1(3, 10, "common.code"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(6, 12, "order.state"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(9, 14, "customer.customer"))("hiddenByDefault", true);
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(12, 16, "order.total"));
          ɵɵadvance(3);
          ɵɵproperty("heading", ɵɵpipeBind1(15, 18, "order.placed-at"));
        }
      },
      dependencies: [ClrIconCustomTag, RouterLink, CustomerLabelComponent, OrderStateLabelComponent, DataTable2Component, DataTable2ColumnComponent, AsyncPipe, TranslatePipe, TimeAgoPipe, LocaleCurrencyPipe],
      styles: ["vdr-data-table[_ngcontent-%COMP%]     table{margin-top:0}vdr-order-state-label[_ngcontent-%COMP%]{display:inline-block;margin-top:2px}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LatestOrdersWidgetComponent, [{
    type: Component,
    args: [{
      selector: "vdr-latest-orders-widget",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-data-table-2 [items]="latestOrders$ | async" id="latest-orders-widget-list">
    <vdr-dt2-column [heading]="'common.code' | translate" id="code">
        <ng-template let-order="item">
            <a class="button-ghost" [routerLink]="['/orders/', order.id]"
                ><span>{{ order.code }}</span>
                <clr-icon shape="arrow right"></clr-icon>
            </a>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.state' | translate" id="state" [hiddenByDefault]="true">
        <ng-template let-order="item">
            <vdr-order-state-label [state]="order.state"></vdr-order-state-label>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'customer.customer' | translate" id="customer" [hiddenByDefault]="true">
        <ng-template let-order="item">
            <vdr-customer-label [customer]="order.customer"></vdr-customer-label>
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.total' | translate" id="total">
        <ng-template let-order="item">
            {{ order.totalWithTax | localeCurrency : order.currencyCode }}
        </ng-template>
    </vdr-dt2-column>
    <vdr-dt2-column [heading]="'order.placed-at' | translate" id="placed-at">
        <ng-template let-order="item">
            {{ order.orderPlacedAt | timeAgo }}
        </ng-template>
    </vdr-dt2-column>
</vdr-data-table-2>
`,
      styles: ["vdr-data-table ::ng-deep table{margin-top:0}vdr-order-state-label{display:inline-block;margin-top:2px}\n"]
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var LatestOrdersWidgetModule = class _LatestOrdersWidgetModule {
  static {
    this.ɵfac = function LatestOrdersWidgetModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LatestOrdersWidgetModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _LatestOrdersWidgetModule,
      declarations: [LatestOrdersWidgetComponent],
      imports: [CoreModule, SharedModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CoreModule, SharedModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LatestOrdersWidgetModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule, SharedModule],
      declarations: [LatestOrdersWidgetComponent]
    }]
  }], null, null);
})();
var GET_ORDER_CHART_DATA = gql`
    query GetOrderChartData($refresh: Boolean, $types: [MetricType!]!) {
        metricSummary(input: { interval: Daily, types: $types, refresh: $refresh }) {
            interval
            type
            entries {
                label
                value
            }
        }
    }
`;
var OrderChartWidgetComponent = class _OrderChartWidgetComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.refresh$ = new Subject();
    this.metricType$ = new BehaviorSubject(MetricType.OrderTotal);
    this.MetricType = MetricType;
  }
  ngOnInit() {
    const currencyCode$ = this.dataService.settings.getActiveChannel().refetchOnChannelChange().mapStream((data) => data.activeChannel.defaultCurrencyCode || void 0);
    const uiState$ = this.dataService.client.uiState().mapStream((data) => data.uiState);
    const metricType$ = this.metricType$.pipe(distinctUntilChanged());
    this.metrics$ = combineLatest(metricType$, currencyCode$, uiState$).pipe(switchMap(([metricType, currencyCode, uiState]) => this.refresh$.pipe(startWith(false), switchMap((refresh) => this.dataService.query(GetOrderChartDataDocument, {
      types: [metricType],
      refresh
    }).mapSingle((data) => data.metricSummary).pipe(map((metrics) => {
      const formatValueAs = metricType === MetricType.OrderCount ? "number" : "currency";
      const locale = `${uiState.language}-${uiState.locale}`;
      const formatOptions = {
        formatValueAs,
        currencyCode,
        locale
      };
      return metrics.find((m) => m.type === metricType)?.entries.map((entry) => __spreadProps(__spreadValues({}, entry), {
        formatOptions
      })) ?? [];
    }))))));
  }
  refresh() {
    this.refresh$.next(true);
  }
  static {
    this.ɵfac = function OrderChartWidgetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderChartWidgetComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderChartWidgetComponent,
      selectors: [["vdr-order-chart-widget"]],
      standalone: false,
      decls: 4,
      vars: 6,
      consts: [[3, "entries"], ["class", "flex", 4, "ngIf"], [1, "flex"], [1, "button-small", 3, "click"], [1, "ml-1", "button-small", 3, "click"], [1, "flex-spacer"], ["shape", "refresh"]],
      template: function OrderChartWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelement(0, "vdr-chart", 0);
          ɵɵpipe(1, "async");
          ɵɵtemplate(2, OrderChartWidgetComponent_div_2_Template, 13, 15, "div", 1);
          ɵɵpipe(3, "async");
        }
        if (rf & 2) {
          ɵɵproperty("entries", ɵɵpipeBind1(1, 2, ctx.metrics$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(3, 4, ctx.metricType$));
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, ChartComponent, AsyncPipe, TranslatePipe],
      styles: [".button-small.active[_ngcontent-%COMP%]{background-color:var(--color-primary-200);color:var(--color-primary-900)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderChartWidgetComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-chart-widget",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<vdr-chart [entries]="metrics$ | async" />
<div class="flex" *ngIf="metricType$ | async as activeMetricType">
    <button
        class="button-small"
        (click)="metricType$.next(MetricType.OrderTotal)"
        [class.active]="activeMetricType === MetricType.OrderTotal"
    >
        {{ 'dashboard.metric-order-total-value' | translate }}
    </button>
    <button
        class="ml-1 button-small"
        (click)="metricType$.next(MetricType.OrderCount)"
        [class.active]="activeMetricType === MetricType.OrderCount"
    >
        {{ 'dashboard.metric-number-of-orders' | translate }}
    </button>
    <button
        class="ml-1 button-small"
        (click)="metricType$.next(MetricType.AverageOrderValue)"
        [class.active]="activeMetricType === MetricType.AverageOrderValue"
    >
        {{ 'dashboard.metric-average-order-value' | translate }}
    </button>
    <div class="flex-spacer"></div>
    <button class="button-small" (click)="refresh()">
        <clr-icon shape="refresh"></clr-icon>
    </button>
</div>
`,
      styles: [".button-small.active{background-color:var(--color-primary-200);color:var(--color-primary-900)}\n"]
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var GET_ORDER_SUMMARY = gql`
    query GetOrderSummary($start: DateTime!, $end: DateTime!) {
        orders(options: { filter: { orderPlacedAt: { between: { start: $start, end: $end } } } }) {
            totalItems
            items {
                id
                totalWithTax
                currencyCode
            }
        }
    }
`;
var OrderSummaryWidgetComponent = class _OrderSummaryWidgetComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.today = /* @__PURE__ */ new Date();
    this.yesterday = new Date((/* @__PURE__ */ new Date()).setDate(this.today.getDate() - 1));
    this.selection$ = new BehaviorSubject({
      timeframe: "day",
      date: this.today
    });
  }
  ngOnInit() {
    this.dateRange$ = this.selection$.pipe(distinctUntilChanged(), map((selection) => ({
      start: (0, import_dayjs.default)(selection.date).startOf(selection.timeframe).toDate(),
      end: (0, import_dayjs.default)(selection.date).endOf(selection.timeframe).toDate()
    })), shareReplay(1));
    const orderSummary$ = this.dateRange$.pipe(switchMap(({
      start,
      end
    }) => this.dataService.query(GetOrderSummaryDocument, {
      start: start.toISOString(),
      end: end.toISOString()
    }).refetchOnChannelChange().mapStream((data) => data.orders)), shareReplay(1));
    this.totalOrderCount$ = orderSummary$.pipe(map((res) => res.totalItems));
    this.totalOrderValue$ = orderSummary$.pipe(map((res) => res.items.reduce((total, order) => total + order.totalWithTax, 0)));
    this.currencyCode$ = this.dataService.settings.getActiveChannel().refetchOnChannelChange().mapStream((data) => data.activeChannel.defaultCurrencyCode || void 0);
  }
  static {
    this.ɵfac = function OrderSummaryWidgetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderSummaryWidgetComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _OrderSummaryWidgetComponent,
      selectors: [["vdr-order-summary-widget"]],
      standalone: false,
      decls: 22,
      vars: 23,
      consts: [[1, "stats"], [1, "stat"], [1, "stat-figure"], [1, "stat-label"], [1, "footer"], ["class", "flex", 4, "ngIf"], ["class", "date-range", 4, "ngIf"], [1, "flex"], [1, "button-small", 3, "click"], [1, "ml-1", "button-small", 3, "click"], [1, "date-range"]],
      template: function OrderSummaryWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
          ɵɵtext(3);
          ɵɵpipe(4, "async");
          ɵɵelementEnd();
          ɵɵelementStart(5, "div", 3);
          ɵɵtext(6);
          ɵɵpipe(7, "translate");
          ɵɵelementEnd()();
          ɵɵelementStart(8, "div", 1)(9, "div", 2);
          ɵɵtext(10);
          ɵɵpipe(11, "async");
          ɵɵpipe(12, "async");
          ɵɵpipe(13, "localeCurrency");
          ɵɵelementEnd();
          ɵɵelementStart(14, "div", 3);
          ɵɵtext(15);
          ɵɵpipe(16, "translate");
          ɵɵelementEnd()()();
          ɵɵelementStart(17, "div", 4);
          ɵɵtemplate(18, OrderSummaryWidgetComponent_div_18_Template, 13, 20, "div", 5);
          ɵɵpipe(19, "async");
          ɵɵtemplate(20, OrderSummaryWidgetComponent_div_20_Template, 4, 6, "div", 6);
          ɵɵpipe(21, "async");
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(4, 6, ctx.totalOrderCount$));
          ɵɵadvance(3);
          ɵɵtextInterpolate(ɵɵpipeBind1(7, 8, "dashboard.total-orders"));
          ɵɵadvance(4);
          ɵɵtextInterpolate1(" ", ɵɵpipeBind2(13, 14, ɵɵpipeBind1(11, 10, ctx.totalOrderValue$), ɵɵpipeBind1(12, 12, ctx.currencyCode$) || void 0), " ");
          ɵɵadvance(5);
          ɵɵtextInterpolate(ɵɵpipeBind1(16, 17, "dashboard.total-order-value"));
          ɵɵadvance(3);
          ɵɵproperty("ngIf", ɵɵpipeBind1(19, 19, ctx.selection$));
          ɵɵadvance(2);
          ɵɵproperty("ngIf", ɵɵpipeBind1(21, 21, ctx.dateRange$));
        }
      },
      dependencies: [NgIf, AsyncPipe, TranslatePipe, LocaleDatePipe, LocaleCurrencyPipe],
      styles: [".stats[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.stat[_ngcontent-%COMP%]{text-align:center}.stat-figure[_ngcontent-%COMP%]{font-size:2rem;line-height:3rem}.stat-label[_ngcontent-%COMP%]{text-transform:uppercase}.date-range[_ngcontent-%COMP%]{margin-top:calc(var(--space-unit) * 3);font-size:var(--font-size-xs)}.footer[_ngcontent-%COMP%]{margin-top:24px;display:flex;flex-direction:column;justify-content:space-between}.button-small.active[_ngcontent-%COMP%]{background-color:var(--color-primary-200);color:var(--color-primary-900)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderSummaryWidgetComponent, [{
    type: Component,
    args: [{
      selector: "vdr-order-summary-widget",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div class="stats">
    <div class="stat">
        <div class="stat-figure">{{ totalOrderCount$ | async }}</div>
        <div class="stat-label">{{ 'dashboard.total-orders' | translate }}</div>
    </div>
    <div class="stat">
        <div class="stat-figure">
            {{ totalOrderValue$ | async | localeCurrency: (currencyCode$ | async) || undefined }}
        </div>
        <div class="stat-label">{{ 'dashboard.total-order-value' | translate }}</div>
    </div>
</div>
<div class="footer">
    <div class="flex" *ngIf="selection$ | async as selection">
        <button class="button-small" [class.active]="selection.date === today" (click)="selection$.next({timeframe: 'day', date: today})">
            {{ 'dashboard.today' | translate }}
        </button>
        <button class="ml-1 button-small" [class.active]="selection.date === yesterday" (click)="selection$.next({timeframe: 'day', date: yesterday})">
            {{ 'dashboard.yesterday' | translate }}
        </button>
        <button class="ml-1 button-small" [class.active]="selection.timeframe === 'week'" (click)="selection$.next({timeframe: 'week'})">
            {{ 'dashboard.thisWeek' | translate }}
        </button>
        <button class="ml-1 button-small" [class.active]="selection.timeframe === 'month'" (click)="selection$.next({timeframe: 'month'})">
            {{ 'dashboard.thisMonth' | translate }}
        </button>
    </div>

    <div class="date-range" *ngIf="dateRange$ | async as range">
        {{ range.start | localeDate }} - {{ range.end | localeDate }}
    </div>
</div>
`,
      styles: [".stats{display:flex;justify-content:space-evenly}.stat{text-align:center}.stat-figure{font-size:2rem;line-height:3rem}.stat-label{text-transform:uppercase}.date-range{margin-top:calc(var(--space-unit) * 3);font-size:var(--font-size-xs)}.footer{margin-top:24px;display:flex;flex-direction:column;justify-content:space-between}.button-small.active{background-color:var(--color-primary-200);color:var(--color-primary-900)}\n"]
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var OrderSummaryWidgetModule = class _OrderSummaryWidgetModule {
  static {
    this.ɵfac = function OrderSummaryWidgetModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderSummaryWidgetModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _OrderSummaryWidgetModule,
      declarations: [OrderSummaryWidgetComponent],
      imports: [CoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderSummaryWidgetModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule],
      declarations: [OrderSummaryWidgetComponent]
    }]
  }], null, null);
})();
var DEFAULT_DASHBOARD_WIDGET_LAYOUT = [{
  id: "metrics",
  width: 12
}, {
  id: "orderSummary",
  width: 6
}, {
  id: "latestOrders",
  width: 6
}];
var DEFAULT_WIDGETS = {
  metrics: {
    title: marker("dashboard.metrics"),
    supportedWidths: [6, 8, 12],
    loadComponent: () => OrderChartWidgetComponent,
    requiresPermissions: [Permission.ReadOrder]
  },
  orderSummary: {
    title: marker("dashboard.orders-summary"),
    loadComponent: () => OrderSummaryWidgetComponent,
    supportedWidths: [4, 6, 8, 12],
    requiresPermissions: [Permission.ReadOrder]
  },
  latestOrders: {
    title: marker("dashboard.latest-orders"),
    loadComponent: () => LatestOrdersWidgetComponent,
    supportedWidths: [6, 8, 12],
    requiresPermissions: [Permission.ReadOrder]
  }
};
var DashboardModule = class _DashboardModule {
  constructor(dashboardWidgetService) {
    Object.entries(DEFAULT_WIDGETS).map(([id, config]) => {
      if (!dashboardWidgetService.getWidgetById(id)) {
        dashboardWidgetService.registerWidget(id, config);
      }
    });
    if (dashboardWidgetService.getDefaultLayout().length === 0) {
      dashboardWidgetService.setDefaultLayout(DEFAULT_DASHBOARD_WIDGET_LAYOUT);
    }
  }
  static {
    this.ɵfac = function DashboardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardModule)(ɵɵinject(DashboardWidgetService));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _DashboardModule,
      declarations: [DashboardComponent, DashboardWidgetComponent, OrderChartWidgetComponent],
      imports: [SharedModule, RouterModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [SharedModule, RouterModule.forChild(dashboardRoutes)]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardModule, [{
    type: NgModule,
    args: [{
      imports: [SharedModule, RouterModule.forChild(dashboardRoutes)],
      declarations: [DashboardComponent, DashboardWidgetComponent, OrderChartWidgetComponent]
    }]
  }], () => [{
    type: DashboardWidgetService
  }], null);
})();
var TestWidgetComponent = class _TestWidgetComponent {
  static {
    this.ɵfac = function TestWidgetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestWidgetComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _TestWidgetComponent,
      selectors: [["vdr-test-widget"]],
      standalone: false,
      decls: 2,
      vars: 0,
      template: function TestWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "p");
          ɵɵtext(1, "This is a test widget!");
          ɵɵelementEnd();
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestWidgetComponent, [{
    type: Component,
    args: [{
      selector: "vdr-test-widget",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: "<p>This is a test widget!</p>\n"
    }]
  }], null, null);
})();
var TestWidgetModule = class _TestWidgetModule {
  static {
    this.ɵfac = function TestWidgetModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TestWidgetModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _TestWidgetModule,
      declarations: [TestWidgetComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestWidgetModule, [{
    type: NgModule,
    args: [{
      declarations: [TestWidgetComponent]
    }]
  }], null, null);
})();
var WelcomeWidgetComponent = class _WelcomeWidgetComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.version = ADMIN_UI_VERSION;
    this.brand = getAppConfig().brand;
    this.hideVendureBranding = getAppConfig().hideVendureBranding;
    this.hideVersion = getAppConfig().hideVersion;
  }
  ngOnInit() {
    this.administrator$ = this.dataService.administrator.getActiveAdministrator().mapStream((data) => data.activeAdministrator || null);
  }
  static {
    this.ɵfac = function WelcomeWidgetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WelcomeWidgetComponent)(ɵɵdirectiveInject(DataService));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _WelcomeWidgetComponent,
      selectors: [["vdr-welcome-widget"]],
      standalone: false,
      decls: 4,
      vars: 3,
      consts: [[4, "ngIf"], [1, "placeholder"], ["shape", "line-chart", "size", "128"], [1, ""], [1, "p5"], ["class", "p5", 4, "ngIf"]],
      template: function WelcomeWidgetComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵtemplate(0, WelcomeWidgetComponent_div_0_Template, 8, 6, "div", 0);
          ɵɵpipe(1, "async");
          ɵɵelementStart(2, "div", 1);
          ɵɵelement(3, "clr-icon", 2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngIf", ɵɵpipeBind1(1, 1, ctx.administrator$));
        }
      },
      dependencies: [ClrIconCustomTag, NgIf, AsyncPipe, TimeAgoPipe],
      styles: ["[_nghost-%COMP%]{display:flex;justify-content:space-between}.placeholder[_ngcontent-%COMP%]{color:var(--color-grey-200)}"],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WelcomeWidgetComponent, [{
    type: Component,
    args: [{
      selector: "vdr-welcome-widget",
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: false,
      template: `<div *ngIf="administrator$ | async as administrator">
    <h4 class="">
        Welcome, {{ administrator.firstName }} {{ administrator.lastName }}<br />
        <small class="p5">Last login: {{ administrator.user.lastLogin | timeAgo }}</small>
    </h4>

    <p class="p5" *ngIf="!hideVendureBranding || !hideVersion">
        {{ hideVendureBranding ? '' : 'Vendure' }} {{ hideVersion ? '' : ('Admin UI v' + version) }}
    </p>
</div>
<div class="placeholder">
    <clr-icon shape="line-chart" size="128"></clr-icon>
</div>
`,
      styles: [":host{display:flex;justify-content:space-between}.placeholder{color:var(--color-grey-200)}\n"]
    }]
  }], () => [{
    type: DataService
  }], null);
})();
var WelcomeWidgetModule = class _WelcomeWidgetModule {
  static {
    this.ɵfac = function WelcomeWidgetModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WelcomeWidgetModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _WelcomeWidgetModule,
      declarations: [WelcomeWidgetComponent],
      imports: [CoreModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WelcomeWidgetModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule],
      declarations: [WelcomeWidgetComponent]
    }]
  }], null, null);
})();
export {
  DEFAULT_DASHBOARD_WIDGET_LAYOUT,
  DEFAULT_WIDGETS,
  DashboardComponent,
  DashboardModule,
  DashboardWidgetComponent,
  GET_ORDER_CHART_DATA,
  GET_ORDER_SUMMARY,
  LatestOrdersWidgetComponent,
  LatestOrdersWidgetModule,
  OrderChartWidgetComponent,
  OrderSummaryWidgetComponent,
  OrderSummaryWidgetModule,
  TestWidgetComponent,
  TestWidgetModule,
  WelcomeWidgetComponent,
  WelcomeWidgetModule,
  dashboardRoutes
};
//# sourceMappingURL=@vendure_admin-ui_dashboard.js.map
