(function( $ ) {

    var jQueryFile = function( el ) {
        this.$el = el = $( el );
        this.input = $( "<input type='file' />" )
            .css( "position", "absolute" )
            .css( "margin", 0 )
            .css( "padding", 0 )
            .css( "cursor", "pointer" )
            .css( "font-size", "23px" )
            .css( "direction", "ltr" )
            .offset({
                top: 0,
                left: 0
            })
            .height( el.outerHeight() )
            .width( el.outerWidth() )
            .attr( "name", el.attr( "name" ) )
            .css( "opacity", 0 )
            .on( "change", function() {
                el.trigger( "jquery-file" );
            });

        el.append( this.input )
            .css( "overflow", "hidden" )
            .css( "position", "relative" );
    };

    //
    $.fn.file = function() {
        this.each( function( i, el ) {
            var $el = $( el );
            if ( $el.data( "jquery-file" ) ) {
                return; // already initialized
            }

            $el.data( "jquery-file", new jQueryFile( $el ) );
        });
        return this;
    };

})( jQuery )