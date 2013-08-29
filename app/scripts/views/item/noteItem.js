/*global define */
define(['underscore', 'marionette', 'text!noteItemTempl'],
function (_, Marionette, Template) {
    'use strict';

    var View = Marionette.ItemView.extend({
        template: _.template(Template),

        className: 'content-notes',

        events: {
            'click .favorite': 'favorite'
        },

        initialize: function() {
            this.model.on('change:isFavorite', this.render);
        },

        favorite: function(e) {
            var isFavorite = (this.model.get('isFavorite') === 1) ? 0 : 1 ;
            this.model.save('isFavorite', isFavorite);
        },

        templateHelpers: function() {
            return {
                getProgress: function(taskCompleted, taskAll) {
                    return taskCompleted * 100 / taskAll;
                }
            };
        }
    });

    return View;
});
