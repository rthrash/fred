fred.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        border: false,
        baseCls: 'modx-formpanel',
        cls: 'container',
        id: 'fred-home-panel',
        items: [
            {
                html: '<h2>' + _('fred.home.page_title') + '</h2>',
                border: false,
                cls: 'modx-page-header'
            },
            {
                xtype: 'modx-tabs',
                stateful: true,
                stateId: 'fred-tab-home',
                stateEvents: ['tabchange'],
                getState: function () {
                    return {
                        activeItem: this.items.indexOf(this.getActiveTab())
                    };
                },
                defaults: {
                    border: false,
                    autoHeight: true
                },
                border: true,
                activeItem: 0,
                hideMode: 'offsets',
                items: [
                    {
                        title: _('fred.home.elements'),
                        items: [
                            {
                                xtype: 'modx-vtabs',
                                deferredRender: true,
                                stateful: true,
                                stateId: 'fred-tab-home-elements',
                                stateEvents: ['tabchange'],
                                getState: function () {
                                    return {
                                        activeItem: this.items.indexOf(this.getActiveTab())
                                    };
                                },
                                items: [
                                    {
                                        title: _('fred.home.elements'),
                                        helpPath: 'cmp/elements/',
                                        items: [
                                            {
                                                xtype: 'fred-grid-elements',
                                                preventRender: true,
                                                cls: 'main-wrapper'
                                            }
                                        ]
                                    },
                                    {
                                        title: _('fred.home.element_categories'),
                                        helpPath: 'cmp/element_categories/',
                                        items: [
                                            {
                                                xtype: 'fred-grid-element-categories',
                                                preventRender: true,
                                                cls: 'main-wrapper'
                                            }
                                        ]
                                    },
                                    {
                                        title: _('fred.home.option_sets'),
                                        helpPath: 'cmp/option_sets/',
                                        items: [
                                            {
                                                xtype: 'fred-grid-element-option-sets',
                                                preventRender: true,
                                                cls: 'main-wrapper'
                                            }
                                        ]
                                    },
                                    {
                                        title: _('fred.home.rte_configs'),
                                        helpPath: 'cmp/rte_configs/',
                                        items: [
                                            {
                                                xtype: 'fred-grid-element-rte-configs',
                                                preventRender: true,
                                                cls: 'main-wrapper'
                                            }
                                        ]
                                    },
                                    {
                                        title: _('fred.home.rebuild'),
                                        helpPath: 'cmp/rebuild/',
                                        items: [
                                            {
                                                cls: 'main-wrapper',
                                                items: [
                                                    {
                                                        html: '<p>' + _('fred.rebuild.rebuild_desc') + '</p><br>'
                                                    },
                                                    {
                                                        xtype: 'button',
                                                        text: _('fred.rebuild.rebuild'),
                                                        handler: function() {
                                                            var topic = '/fred/mgr/generate/refresh/';

                                                            var console = MODx.load({
                                                                xtype: 'modx-console',
                                                                register: 'mgr',
                                                                topic: topic,
                                                                show_filename: 0
                                                            });

                                                            console.show(Ext.getBody());

                                                            MODx.Ajax.request({
                                                                url: fred.config.connectorUrl,
                                                                params: {
                                                                    action: 'mgr/generate/refresh',
                                                                    register: 'mgr',
                                                                    topic: topic
                                                                },
                                                                listeners: {
                                                                    success: {
                                                                        fn: function() {
                                                                            console.fireEvent('complete');
                                                                            console = null
                                                                        },
                                                                        scope:this
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: _('fred.home.blueprints'),
                        items: [
                            {
                                xtype: 'modx-vtabs',
                                deferredRender: true,
                                stateful: true,
                                stateId: 'fred-tab-home-blueprints',
                                stateEvents: ['tabchange'],
                                getState: function () {
                                    return {
                                        activeItem: this.items.indexOf(this.getActiveTab())
                                    };
                                },
                                items: [
                                    {
                                        title: _('fred.home.blueprints'),
                                        helpPath: 'cmp/blueprints/',
                                        items: [
                                            {
                                                xtype: 'fred-grid-blueprints',
                                                preventRender: true,
                                                cls: 'main-wrapper'
                                            }
                                        ]
                                    },
                                    {
                                        title: _('fred.home.blueprint_categories'),
                                        helpPath: 'cmp/blueprint_categories/',
                                        items: [
                                            {
                                                xtype: 'fred-grid-blueprint-categories',
                                                preventRender: true,
                                                cls: 'main-wrapper'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        title: _('fred.home.themes'),
                        items: [
                            {
                                xtype: 'modx-vtabs',
                                deferredRender: true,
                                stateful: true,
                                stateId: 'fred-tab-home-themes',
                                stateEvents: ['tabchange'],
                                getState: function () {
                                    return {
                                        activeItem: this.items.indexOf(this.getActiveTab())
                                    };
                                },
                                items: [
                                    {
                                        title: _('fred.home.themes'),
                                        helpPath: 'cmp/themes/',
                                        items: [
                                            {
                                                xtype: 'fred-grid-themes',
                                                preventRender: true,
                                                cls: 'main-wrapper'
                                            }
                                        ]
                                    },
                                    {
                                        title: _('fred.home.themed_templates'),
                                        helpPath: 'cmp/themed_templates/',
                                        items: [
                                            {
                                                xtype: 'fred-grid-themed-templates',
                                                preventRender: true,
                                                cls: 'main-wrapper'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }

                ]
            }
        ]
    });
    fred.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(fred.panel.Home, MODx.Panel, {
    getHelpPath: function() {
        var defaultPath = '';
        
        var tabs = this.find('stateId', 'fred-tab-home');
        if (tabs.length !== 1) {
            return defaultPath;
        }

        tabs = tabs[0];

        var topLevelTab = tabs.getActiveTab();
        var childTab = topLevelTab.find('xtype', 'modx-vtabs');
        
        if (!topLevelTab.helpPath && (childTab.length === 1)) {

            return childTab[0].getActiveTab().helpPath || defaultPath; 
        } else {
            return topLevelTab.helpPath || defaultPath;
        }
    }
});
Ext.reg('fred-panel-home', fred.panel.Home);