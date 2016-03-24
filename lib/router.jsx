FlowRouter.route('/', {
    action() {
        ReactLayout.render(MainLayout, { content: <EditionContainer /> });
    }
});

FlowRouter.route('/admin', {
    action() {
        ReactLayout.render(MainLayout, { content: <AdminPanel /> });
    }
});
