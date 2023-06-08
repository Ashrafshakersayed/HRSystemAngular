import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { TextFieldComponent } from './components/search-fields/text-field/text-field.component';
import { SelectFieldComponent } from './components/search-fields/select-field/select-field.component';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';
import { DragDropModule } from 'primeng/dragdrop';
import { DataListBodyComponent } from './components/data-list-body/data-list-body.component';
import { DataListActionsComponent } from './components/data-list-actions/data-list-actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//primeng
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { EditorModule } from 'primeng/editor';
import {TabViewModule} from 'primeng/tabview';

//components
import { DataListComponent } from './components/data-list/data-list.component';
import { StatusColComponent } from './components/columns/status-col/status-col.component';
import { DateColComponent } from './components/columns/date-col/date-col.component';
import { DynamicSearchFormComponent } from './components/dynamic-search-form/dynamic-search-form.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SharedProgressBarComponent } from './components/shared-progress-bar/sharedProgressBar.component';
import { SharedSpinnerComponent } from './components/shared-spinner/sharedSpinner.component';
import { LinkColComponent } from './components/columns/link-col/link-col.component';
import { RouterModule } from '@angular/router';
import { DataListSearchComponent } from './components/data-list-search/data-list-search.component';
import {InputMaskModule} from 'primeng/inputmask';
import { HiddenColumnFilterPipe } from './pipes/hidden-coulmn-filter.pipe';
import {DynamicDialogModule} from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    DataListComponent,
    StatusColComponent,
    DateColComponent,
    DynamicSearchFormComponent,
    TextFieldComponent,
    SelectFieldComponent,
    DataListBodyComponent,
    DataListActionsComponent,
    SharedSpinnerComponent,
    SharedProgressBarComponent,
    LinkColComponent,
    DataListSearchComponent,
    HiddenColumnFilterPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    ProgressBarModule,
    InputMaskModule,

    //primeng
    TableModule,
    AutoCompleteModule,
    CalendarModule,
    CarouselModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    TreeModule,
    GalleriaModule,
    MenuModule,
    TreeTableModule,
    FileUploadModule,
    DragDropModule,
    InputSwitchModule,
    SidebarModule,
    CheckboxModule,
    PasswordModule,
    RippleModule,
    ScrollPanelModule,
    PanelMenuModule,
    FormsModule,
    InputTextareaModule,
    OverlayPanelModule,
    RouterModule

  ],
  exports: [
    HttpClientModule,
    //ng-module
    AutoCompleteModule,
    HiddenColumnFilterPipe,
    CalendarModule,
    DragDropModule,
    FormsModule,
    ConfirmDialogModule,
    CarouselModule,
    GalleriaModule,
    OverlayPanelModule,
    MenuModule,
    SidebarModule,
    FileUploadModule,
    TreeTableModule,
    TreeModule,
    DynamicDialogModule,
    CheckboxModule,
    PasswordModule,
    RippleModule,
    ReactiveFormsModule,
    ScrollPanelModule,
    PanelMenuModule,
    AccordionModule,
    InputTextModule,
    DropdownModule,
    InputSwitchModule,
    ButtonModule,
    TableModule,
    ProgressBarModule,
    InputMaskModule,
    TabViewModule,
    //components
    DataListComponent,
    StatusColComponent,
    DateColComponent,
    DynamicSearchFormComponent,
    InputTextareaModule,
    SharedSpinnerComponent,
    SharedProgressBarComponent,
    ImageModule,
    DialogModule,
    EditorModule,
  ]
})
export class SharedModule {}
