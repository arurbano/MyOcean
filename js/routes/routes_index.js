var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","loadChildren":"./tabs/tabs.module#TabsPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tabs/tabs.router.module.ts","module":"TabsPageRoutingModule","children":[{"path":"tabs","component":"TabsPage","children":[{"path":"tab1","children":[{"path":"","loadChildren":"../tab1/tab1.module#Tab1PageModule","children":[{"kind":"module","children":[],"module":"Tab1PageModule"}]}]},{"path":"tab2","children":[{"path":"","loadChildren":"../tab2/tab2.module#Tab2PageModule","children":[{"kind":"module","children":[],"module":"Tab2PageModule"}]}]},{"path":"","redirectTo":"/tabs/tab1","pathMatch":"full"}]},{"path":"","redirectTo":"/tabs/tab1","pathMatch":"full"}],"kind":"module"}],"module":"TabsPageModule"}]},{"path":"modal","loadChildren":"./modal/modal.module#ModalPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modal/modal.module.ts","module":"ModalPageModule","children":[{"path":"","component":"ModalPage"}],"kind":"module"}],"module":"ModalPageModule"}]},{"path":"modal-help","loadChildren":"./modal-help/modal-help.module#ModalHelpPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/modal-help/modal-help.module.ts","module":"ModalHelpPageModule","children":[{"path":"","component":"ModalHelpPage"}],"kind":"module"}],"module":"ModalHelpPageModule"}]}],"kind":"module"}]}
