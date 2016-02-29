FlowRouter.route('/', {
    action() {
        ReactLayout.render(MainLayout, { content: <ArticleOverview /> });
    }
});

FlowRouter.route('/admin', {
    action() {
        ReactLayout.render(MainLayout, { content: <AdminPanel /> });
    }
});
