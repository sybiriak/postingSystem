"use strict";
(self["webpackChunkposting_system"] = self["webpackChunkposting_system"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-list/post-list.component */ 5657);


class AppComponent {
    constructor() {
        this.title = 'posting-system';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post-list");
    } }, directives: [_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_0__.PostListComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _post_list_post_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-list/post-list.module */ 7753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _post_list_post_list_module__WEBPACK_IMPORTED_MODULE_1__.PostListModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _post_list_post_list_module__WEBPACK_IMPORTED_MODULE_1__.PostListModule] }); })();


/***/ }),

/***/ 5657:
/*!**************************************************!*\
  !*** ./src/app/post-list/post-list.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListComponent": () => (/* binding */ PostListComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _shared_models_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/post */ 9068);
/* harmony import */ var _shared_utils_cloneDeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utils/cloneDeep */ 4538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.service */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_select_filter_select_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/select-filter/select-filter.component */ 240);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post/post.component */ 5724);








function PostListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PostListComponent_div_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-post", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("postUpdated", function PostListComponent_div_2_ng_container_2_Template_app_post_postUpdated_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r4.updatePostList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const post_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("post", post_r3)("tags", ctx_r2.tags);
} }
function PostListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-select-filter", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("filtered", function PostListComponent_div_2_Template_app_select_filter_filtered_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.filterPostList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PostListComponent_div_2_ng_container_2_Template, 2, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-post", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("postUpdated", function PostListComponent_div_2_Template_app_post_postUpdated_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.updatePostList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx_r1.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.postList)("ngForTrackBy", ctx_r1.trackById);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("post", ctx_r1.newPost)("tags", ctx_r1.tags)("isEditMode", !ctx_r1.newPost.id);
} }
class PostListComponent {
    constructor(postService, cdr) {
        this.postService = postService;
        this.cdr = cdr;
        this.postList = [];
        this.tags = [];
        this.isLoading = true;
        this.newPost = new _shared_models_post__WEBPACK_IMPORTED_MODULE_0__.Post({});
        this.postListCopy = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    }
    ngOnInit() {
        this.initAllPost();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    updateTagList() {
        this.tags = Array.from(new Set([...this.postList.map((d) => d.tags)].flat()));
    }
    updatePostList(post) {
        if (post) {
            const index = this.postList.findIndex((d) => d.id === post.id);
            if (index > -1) {
                this.postList[index] = post;
            }
            else {
                this.postList.push(post);
            }
            if (post.deleted) {
                const copyIndex = this.postListCopy.findIndex((d) => d.id === post.id);
                this.postListCopy[copyIndex].deleted = true;
                this.postList = this.postListCopy.filter((d) => !d.deleted);
            }
            this.updatePosListDependencies();
        }
    }
    filterPostList(value) {
        if (value) {
            this.postList = this.postListCopy.filter((d) => d.tags.includes(value));
        }
        else {
            this.postList = (0,_shared_utils_cloneDeep__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.postListCopy);
        }
    }
    trackById(index, item) {
        return item.id || index;
    }
    initAllPost() {
        this.subscription.add(this.postService
            .getAll()
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
            this.isLoading = false;
            this.cdr.detectChanges();
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)((err) => (console.error(err), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]))))
            .subscribe((postList) => {
            this.postList = postList;
            this.updatePosListDependencies();
        }));
    }
    updatePosListDependencies() {
        this.postListCopy = (0,_shared_utils_cloneDeep__WEBPACK_IMPORTED_MODULE_1__.cloneDeep)(this.postList);
        this.updateTagList();
    }
}
PostListComponent.ɵfac = function PostListComponent_Factory(t) { return new (t || PostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
PostListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PostListComponent, selectors: [["app-post-list"]], decls: 3, vars: 2, consts: [[1, "container"], ["class", "loader", 4, "ngIf"], ["class", "post-list", 4, "ngIf"], [1, "loader"], [1, "post-list"], [3, "options", "filtered"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "post", "tags", "isEditMode", "postUpdated"], [3, "post", "tags", "postUpdated"]], template: function PostListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, PostListComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PostListComponent_div_2_Template, 4, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_select_filter_select_filter_component__WEBPACK_IMPORTED_MODULE_3__.SelectFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _post_post_component__WEBPACK_IMPORTED_MODULE_4__.PostComponent], styles: [".loader[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--base-gap) 0;\n}\n\n.post-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: var(--base-gap) 0;\n  gap: var(--base-gap);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQUNGIiwiZmlsZSI6InBvc3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLWJhc2UtZ2FwKSAwO1xufVxuXG4ucG9zdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IHZhcigtLWJhc2UtZ2FwKSAwO1xuICBnYXA6IHZhcigtLWJhc2UtZ2FwKTtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 7753:
/*!***********************************************!*\
  !*** ./src/app/post-list/post-list.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListModule": () => (/* binding */ PostListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _post_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-list.component */ 5657);
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.service */ 7172);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post.component */ 5724);
/* harmony import */ var _post_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post/tag/tag.component */ 5595);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/pipes/safe-html.pipe */ 5940);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _shared_components_select_filter_select_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/select-filter/select-filter.module */ 9128);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);










class PostListModule {
}
PostListModule.ɵfac = function PostListModule_Factory(t) { return new (t || PostListModule)(); };
PostListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: PostListModule });
PostListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_post_service__WEBPACK_IMPORTED_MODULE_1__.PostService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_components_select_filter_select_filter_module__WEBPACK_IMPORTED_MODULE_5__.SelectFilterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](PostListModule, { declarations: [_post_list_component__WEBPACK_IMPORTED_MODULE_0__.PostListComponent, _post_post_component__WEBPACK_IMPORTED_MODULE_2__.PostComponent, _post_tag_tag_component__WEBPACK_IMPORTED_MODULE_3__.TagComponent, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHTMLPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_components_select_filter_select_filter_module__WEBPACK_IMPORTED_MODULE_5__.SelectFilterModule], exports: [_post_list_component__WEBPACK_IMPORTED_MODULE_0__.PostListComponent] }); })();


/***/ }),

/***/ 7172:
/*!*******************************************!*\
  !*** ./src/app/post-list/post.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostService": () => (/* binding */ PostService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _shared_models_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/models/post */ 9068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);




class PostService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http
            .get('/assets/mocks/post-list.json')
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response.map((d) => new _shared_models_post__WEBPACK_IMPORTED_MODULE_0__.Post(d))));
    }
    updatePost(post) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
    }
    addPost(post) {
        post.id = (Math.random() * Math.random() * Math.random()).toString(); // Server generate id simulation
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(post);
    }
    deletePost(postId) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
PostService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac });


/***/ }),

/***/ 5724:
/*!**************************************************!*\
  !*** ./src/app/post-list/post/post.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_shared_models_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/post */ 9068);
/* harmony import */ var src_app_shared_validators_unique__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/validators/unique */ 7452);
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post.service */ 7172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _tag_tag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tag/tag.component */ 5595);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 5940);











function PostComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "safeHTML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.post.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, ctx_r1.post.text), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function PostComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.form);
} }
function PostComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-tag", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("tagRemoved", function PostComponent_div_0_ng_container_6_Template_app_tag_tagRemoved_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r8.updateTags($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("tag", tag_r7)("isEditMode", ctx_r3.isEditMode);
} }
function PostComponent_div_0_ng_container_7_ng_container_3_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "option", 21);
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", item_r12);
} }
const _c0 = function (a0) { return { invalid: a0 }; };
function PostComponent_div_0_ng_container_7_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "datalist", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PostComponent_div_0_ng_container_7_ng_container_3_option_3_Template, 1, 1, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostComponent_div_0_ng_container_7_ng_container_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r13.addTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r10.addTagControl)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, ctx_r10.addTagControl.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r10.availableTags);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r10.addTagControl.errors);
} }
function PostComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostComponent_div_0_ng_container_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.showAddTagField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PostComponent_div_0_ng_container_7_ng_container_3_Template, 6, 6, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.isAddTagFieldShowed ? "-" : "+", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.isAddTagFieldShowed);
} }
function PostComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostComponent_div_0_ng_container_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r17.deletePost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostComponent_div_0_ng_container_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r19.setToEditMode(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function PostComponent_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostComponent_div_0_ng_container_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r20.clearChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PostComponent_div_0_ng_container_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r22.savePost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function PostComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, PostComponent_div_0_ng_container_2_Template, 5, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, PostComponent_div_0_ng_container_3_Template, 3, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, PostComponent_div_0_ng_container_6_Template, 2, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, PostComponent_div_0_ng_container_7_Template, 4, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, PostComponent_div_0_ng_container_9_Template, 5, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, PostComponent_div_0_ng_container_10_Template, 5, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx_r0.isEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", (tmp_3_0 = ctx_r0.form.get("tags")) == null ? null : tmp_3_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.isEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx_r0.isEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", true);
} }
class PostComponent {
    constructor(postService, cdr) {
        this.postService = postService;
        this.cdr = cdr;
        this.post = {};
        this.tags = [];
        this.isEditMode = false;
        this.postUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.availableTags = [];
        this.isAddTagFieldShowed = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({});
        this.addTagControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subscription();
    }
    ngOnChanges(changes) {
        if (changes['tags'] && changes['tags'].currentValue) {
            this.updateAvailableTags(changes);
        }
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.post.title),
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.post.text),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.post.tags || []),
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    setToEditMode(isEdit) {
        this.isEditMode = isEdit;
    }
    clearChanges() {
        this.post.id ? this.form.patchValue(this.post) : this.form.reset();
        this.showAddTagField(false);
        this.setToEditMode(false);
        this.updateAvailableTags();
    }
    savePost() {
        const post = new src_app_shared_models_post__WEBPACK_IMPORTED_MODULE_0__.Post(Object.assign({}, this.post, this.form.value));
        if (post.id) {
            this.updatePost(post);
        }
        else {
            this.addPost(post);
        }
    }
    updatePost(post) {
        this.subscription.add(this.postService
            .updatePost(post)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)((err) => (console.error(err), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(false))))
            .subscribe((updated) => {
            if (updated) {
                this.setToEditMode(false);
                this.postUpdated.emit(post);
            }
        }));
    }
    addPost(post) {
        this.subscription.add(this.postService
            .addPost(post)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)((err) => (console.error(err), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null))))
            .subscribe((newPost) => {
            if (newPost) {
                this.postUpdated.emit(newPost);
                this.clearChanges();
                this.setToEditMode(true);
            }
        }));
    }
    deletePost() {
        this.subscription.add(this.postService
            .deletePost(this.post.id)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)((err) => (console.error(err), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(false))))
            .subscribe((deleted) => {
            if (deleted) {
                this.post.deleted = true;
                this.postUpdated.emit(this.post);
            }
        }));
    }
    showAddTagField(show) {
        this.isAddTagFieldShowed = show !== null && show !== void 0 ? show : !this.isAddTagFieldShowed;
        if (!this.isAddTagFieldShowed) {
            this.addTagControl.reset();
        }
    }
    updateTags(tag) {
        const tagsControl = this.form.get('tags');
        if (tagsControl && tag) {
            let tags = tagsControl.value || [];
            if (tags.includes(tag)) {
                tags = tags.filter((d) => d !== tag);
            }
            else {
                tags.push(tag);
            }
            tagsControl.patchValue(tags);
        }
        this.updateAvailableTags();
    }
    addTag() {
        const value = this.addTagControl.value.trim();
        if (value && !this.addTagControl.errors) {
            this.updateTags(value);
            this.addTagControl.reset();
        }
    }
    updateAvailableTags(changes) {
        var _a;
        if (changes) {
            this.availableTags = changes['tags'].currentValue.filter((d) => { var _a; return !((_a = this.post.tags) === null || _a === void 0 ? void 0 : _a.includes(d)); });
        }
        else {
            this.availableTags = this.tags.filter((d) => { var _a, _b; return !((_b = (_a = this.form.get('tags')) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.includes(d)); });
        }
        this.addTagControl.setValidators((0,src_app_shared_validators_unique__WEBPACK_IMPORTED_MODULE_1__.uniqueValidator)((_a = this.form.get('tags')) === null || _a === void 0 ? void 0 : _a.value));
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_2__.PostService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
PostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { post: "post", tags: "tags", isEditMode: "isEditMode" }, outputs: { postUpdated: "postUpdated" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "post-item", 4, "ngIf"], [1, "post-item"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "formGroup", 4, "ngSwitchCase"], [1, "actions-container"], [1, "tag-list"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "actions", 3, "ngSwitch"], [1, "title"], [1, "text", 3, "innerHTML"], [3, "formGroup"], ["type", "text", "name", "title", "formControlName", "title", "placeholder", "Type Title", 1, "title-input"], ["name", "text", "rows", "1", "formControlName", "text", "placeholder", "Type text", 1, "text-input"], [3, "tag", "isEditMode", "tagRemoved"], [1, "primary-button", "add-button", 3, "click"], ["type", "text", "placeholder", "add Tag", "list", "tag-list", 3, "formControl", "ngClass"], ["id", "tag-list"], [3, "value", 4, "ngFor", "ngForOf"], [1, "primary-button", "add-tag-button", 3, "disabled", "click"], [3, "value"], [1, "primary-button", "delete-post-button", 3, "click"], [1, "primary-button", 3, "click"], [1, "secondary-button", 3, "click"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, PostComponent_div_0_Template, 11, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.post && ctx.form);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _tag_tag_component__WEBPACK_IMPORTED_MODULE_3__.TagComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"]], pipes: [_shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHTMLPipe], styles: [".post-item[_ngcontent-%COMP%] {\n  padding: var(--base-gap);\n  background-color: var(--color-white);\n  border-radius: var(--base-radius);\n  box-shadow: 0 2px 1px -1px #0003, 0 1px 1px #00000024, 0 1px 3px #0000001f;\n  display: flex;\n  flex-direction: column;\n  gap: var(--base-gap);\n}\n.post-item[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .post-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 21px;\n}\n.post-item[_ngcontent-%COMP%]   .title-input[_ngcontent-%COMP%], .post-item[_ngcontent-%COMP%]   .text-input[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n}\n.tag-list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: calc(var(--base-gap) / 2);\n}\n.tag-list[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%] {\n  outline-color: var(--color-red);\n  border: 2px solid var(--color-red);\n  border-radius: var(--base-radius);\n}\n.add-tag-button[_ngcontent-%COMP%]:disabled {\n  background-color: var(--color-grey);\n  pointer-events: none;\n  cursor: default;\n}\n.add-button[_ngcontent-%COMP%] {\n  font-size: 23px;\n  padding: 0 calc(var(--base-gap) / 2);\n  border-radius: 50%;\n  width: 31px;\n  height: 31px;\n}\n.actions-container[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--base-gap);\n}\n.actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n.delete-post-button[_ngcontent-%COMP%] {\n  background-color: var(--color-red);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSwwRUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FBREY7QUFHRTs7RUFFRSxTQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUlFOztFQUVFLHlDQUFBO0FBRko7QUFNQTtFQUNFLGFBQUE7RUFDQSw4QkF6QlE7QUFzQlY7QUFLRTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtBQUhKO0FBT0E7RUFDRSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUpGO0FBT0E7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSkY7QUFPQTs7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBSkY7QUFPQTtFQUNFLHlCQUFBO0FBSkY7QUFPQTtFQUNFLGtDQUFBO0FBSkYiLCJmaWxlIjoicG9zdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0YWctZ2FwOiBjYWxjKCN7dmFyKC0tYmFzZS1nYXApfSAvIDIpO1xuXG4ucG9zdC1pdGVtIHtcbiAgcGFkZGluZzogdmFyKC0tYmFzZS1nYXApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJhc2UtcmFkaXVzKTtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggIzAwMDMsIDAgMXB4IDFweCAjMDAwMDAwMjQsIDAgMXB4IDNweCAjMDAwMDAwMWY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogdmFyKC0tYmFzZS1nYXApO1xuXG4gIC50aXRsZSxcbiAgLnRleHQge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMjFweDtcbiAgfVxuXG4gIC50aXRsZS1pbnB1dCxcbiAgLnRleHQtaW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi50YWctbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogJHRhZy1nYXA7XG5cbiAgaW5wdXQuaW52YWxpZCB7XG4gICAgb3V0bGluZS1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1yZWQpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJhc2UtcmFkaXVzKTtcbiAgfVxufVxuXG4uYWRkLXRhZy1idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLmFkZC1idXR0b24ge1xuICBmb250LXNpemU6IDIzcHg7XG4gIHBhZGRpbmc6IDAgJHRhZy1nYXA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDMxcHg7XG4gIGhlaWdodDogMzFweDtcbn1cblxuLmFjdGlvbnMtY29udGFpbmVyLFxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBnYXA6IHZhcigtLWJhc2UtZ2FwKTtcbn1cblxuLmFjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZGVsZXRlLXBvc3QtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 5595:
/*!*****************************************************!*\
  !*** ./src/app/post-list/post/tag/tag.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagComponent": () => (/* binding */ TagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



function TagComponent_span_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TagComponent_span_0_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.removeTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TagComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TagComponent_span_0_button_2_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tag, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isEditMode);
} }
class TagComponent {
    constructor() {
        this.tag = '';
        this.isEditMode = false;
        this.tagRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    removeTag() {
        this.tagRemoved.emit(this.tag);
    }
}
TagComponent.ɵfac = function TagComponent_Factory(t) { return new (t || TagComponent)(); };
TagComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TagComponent, selectors: [["app-tag"]], inputs: { tag: "tag", isEditMode: "isEditMode" }, outputs: { tagRemoved: "tagRemoved" }, decls: 1, vars: 1, consts: [["class", "tag-item", 4, "ngIf"], [1, "tag-item"], ["class", "remove-button", 3, "click", 4, "ngIf"], [1, "remove-button", 3, "click"]], template: function TagComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TagComponent_span_0_Template, 3, 2, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tag);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".tag-item[_ngcontent-%COMP%] {\n  border-radius: calc(var(--base-radius) * 4);\n  padding: calc(var(--base-gap) / 2) var(--base-gap);\n  background-color: var(--color-light-grey);\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  flex: 1;\n  font-size: 14px;\n  gap: calc(var(--base-gap) / 2);\n}\n\n.remove-button[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 -5px 0 0;\n  background: var(--color-grey);\n  border: 0;\n  font-size: 1em;\n  width: 16px;\n  height: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border-radius: 50%;\n  color: var(--color-white);\n  line-height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDJDQUFBO0VBQ0Esa0RBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFYUTtBQVVWOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBREYiLCJmaWxlIjoidGFnLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRhZy1nYXA6IGNhbGMoI3t2YXIoLS1iYXNlLWdhcCl9IC8gMik7XG5cbi50YWctaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGMoI3t2YXIoLS1iYXNlLXJhZGl1cyl9ICogNCk7XG4gIHBhZGRpbmc6ICR0YWctZ2FwIHZhcigtLWJhc2UtZ2FwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtZ3JleSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZ2FwOiAkdGFnLWdhcDtcbn1cblxuLnJlbW92ZS1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgLTVweCAwIDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWdyZXkpO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 240:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/select-filter/select-filter.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectFilterComponent": () => (/* binding */ SelectFilterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);






function SelectFilterComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1)("selected", ctx_r0.control.value === option_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1, " ");
} }
class SelectFilterComponent {
    constructor() {
        this.options = [];
        this.filtered = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('');
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    }
    ngOnChanges(changes) {
        if (changes['options'] && !changes['options'].firstChange) {
            if (!changes['options'].currentValue.includes(this.control.value)) {
                this.control.patchValue('', { emitEvent: true });
            }
            else {
                this.control.updateValueAndValidity({ emitEvent: true });
            }
        }
    }
    ngOnInit() {
        this.initFilter();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    initFilter() {
        this.subscription.add(this.control.valueChanges.subscribe((value) => {
            this.filtered.emit(value);
        }));
    }
}
SelectFilterComponent.ɵfac = function SelectFilterComponent_Factory(t) { return new (t || SelectFilterComponent)(); };
SelectFilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectFilterComponent, selectors: [["app-select-filter"]], inputs: { options: "options" }, outputs: { filtered: "filtered" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 2, consts: [[1, "select-filter"], [3, "formControl"], ["value", "", 3, "defaultSelected"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Tag Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Not selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectFilterComponent_option_6_Template, 2, 3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: [".select-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQUFKIiwiZmlsZSI6InNlbGVjdC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0LWZpbHRlciB7XG4gIHNlbGVjdCB7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9128:
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/select-filter/select-filter.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectFilterModule": () => (/* binding */ SelectFilterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _select_filter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-filter.component */ 240);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class SelectFilterModule {
}
SelectFilterModule.ɵfac = function SelectFilterModule_Factory(t) { return new (t || SelectFilterModule)(); };
SelectFilterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SelectFilterModule });
SelectFilterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SelectFilterModule, { declarations: [_select_filter_component__WEBPACK_IMPORTED_MODULE_0__.SelectFilterComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule], exports: [_select_filter_component__WEBPACK_IMPORTED_MODULE_0__.SelectFilterComponent] }); })();


/***/ }),

/***/ 9068:
/*!***************************************!*\
  !*** ./src/app/shared/models/post.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Post": () => (/* binding */ Post)
/* harmony export */ });
class Post {
    constructor(raw) {
        Object.assign(this, raw);
        this.deleted = false;
    }
}


/***/ }),

/***/ 5940:
/*!************************************************!*\
  !*** ./src/app/shared/pipes/safe-html.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHTMLPipe": () => (/* binding */ SafeHTMLPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);


class SafeHTMLPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SafeHTMLPipe.ɵfac = function SafeHTMLPipe_Factory(t) { return new (t || SafeHTMLPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeHTMLPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHTML", type: SafeHTMLPipe, pure: true });


/***/ }),

/***/ 4538:
/*!*******************************************!*\
  !*** ./src/app/shared/utils/cloneDeep.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cloneDeep": () => (/* binding */ cloneDeep)
/* harmony export */ });
const cloneDeep = (data) => {
    return JSON.parse(JSON.stringify(data));
};


/***/ }),

/***/ 7452:
/*!*********************************************!*\
  !*** ./src/app/shared/validators/unique.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uniqueValidator": () => (/* binding */ uniqueValidator)
/* harmony export */ });
function uniqueValidator(list) {
    return (control) => {
        const isNotUnique = control.value && (list === null || list === void 0 ? void 0 : list.includes(control.value));
        return isNotUnique ? { notUnique: { value: control.value } } : null;
    };
}


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map