$(function () {
    var $list = $(".bl-list");
    var $segmentLost = $(".bl-segment-lost-elems");
    var $segmentHere = $(".bl-segment-here-elems");
    var ONE_ROW_HTML = $(".one-row-tmp").html();
    var ONE_ELEM_HTML = $(".one-elem-tmp").html();

    function addItem(title) {
        var $node = $(ONE_ROW_HTML);
        var $rowB = $(ONE_ELEM_HTML);
        $(".field-product").focus();

        $node.find(".bl-product").text(title);
        $rowB.find(".elem-title").text(title);
        var quantity = 1;
        var $quantity_label = $(".elem-icon").html();

        $node.find(".bl-product").click(function () {
            $node.find(".product-rename").val(title);
            $node.find(".bl-product").hide();
            $node.find(".product-rename").show();
            $node.find(".product-rename").focus();
        });

        $node.find(".product-rename").focusout(function () {
            $node.find(".bl-product").text($node.find(".product-rename").val());
            $rowB.find(".elem-title").text($node.find(".product-rename").val());
            $node.find(".product-rename").hide();
            $node.find(".bl-product").show();
            $node.find(".field-product").focus();
        });

        $node.find(".bl-plus").click(function () {
            $node.find(".bl-label").finish();
            $node.find(".bl-label").fadeOut("fast", function () {
                if (quantity == 1) {
                    $node.find(".bl-minus").fadeOut("fast");
                    $node.find(".bl-minus").fadeIn("fast");
                    $node.find(".bl-minus").css("background", "red");
                }
                quantity += 1;
                $node.find(".bl-label").fadeIn("fast");
                $rowB.find(".elem-icon").text(quantity);
                $node.find(".bl-label").text(quantity);
            });
        });


        $node.find(".bl-minus").click(function () {
            $node.find(".bl-label").finish();
            $node.find(".bl-label").fadeOut("fast", function () {
                if (quantity > 1) {
                    quantity -= 1;
                    if (quantity == 1) {
                        $node.find(".bl-minus").css("background", "#FA969B");
                    }
                }
                $node.find(".bl-label").fadeIn("fast");
                $rowB.find(".elem-icon").text(quantity);
                $node.find(".bl-label").text(quantity);

            });
        });
        $list.append($node);
        $segmentLost.append($rowB)

        $node.find(".buy-button").click(function () {
            $node.fadeOut("slow", function () {
                $node.find(".bl-product").css("text-decoration", "none");
                $rowB.find(".elem-title").css("text-decoration", "none");
                $rowB.find(".elem-icon").css("text-decoration", "none");
                $segmentLost.append($rowB);
                $node.find(".bl-minus").css("visibility", "visible");
                $node.find(".bl-plus").css("visibility", "visible");
                $node.find(".buy-button").hide();
                $node.find(".nobuy-button").show();
                $node.fadeIn("slow");
            });
        });
        $node.find(".nobuy-button").click(function () {
            $node.fadeOut("slow", function () {
                $node.find(".bl-product").css("text-decoration", "line-through");
                $rowB.find(".elem-title").css("text-decoration", "line-through");
                $rowB.find(".elem-icon").css("text-decoration", "line-through");
                $segmentHere.append($rowB);
                $node.find(".bl-minus").css("visibility", "hidden");
                $node.find(".bl-plus").css("visibility", "hidden");
                $node.find(".buy-button").show();
                $node.find(".nobuy-button").hide();
                $node.fadeIn("slow");
            });
        });

        $node.find(".remove-button").click(function () {
            $node.hide();
            $rowB.hide();
        });
    }

    $(".button-add").click(function () {
        if ($.trim($(".field-product").val()))
            addItem($.trim($(".field-product").val()));
        $(".field-product").val("");
        $(".field-product").focus();
    });
    addItem("Помідори");
    addItem("Яблука");
    addItem("Груші");
});
/*
!function a(b, c, d) {
    function e(g, h) {
        if (!c[g]) {
            if (!b[g]) {
                var i = "function" == typeof require && require;
                if (!h && i) return i(g, !0);
                if (f) return f(g, !0);
                var j = new Error("Cannot find module '" + g + "'");
                throw j.code = "MODULE_NOT_FOUND", j
            }
            var k = c[g] = {exports: {}};
            b[g][0].call(k.exports, function (a) {
                var c = b[g][1][a];
                return e(c ? c : a)
            }, k, k.exports, a, b, c, d)
        }
        return c[g].exports
    }

    for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
    return e
}({
    1: [function (a, b, c) {
        function d(a) {
            function b(a, b) {
                a.fadeOut(250, function () {
                    b(), a.fadeIn(250)
                })
            }

            function c(b, c) {
                h || (h = a(".row-template").html());
                var i = a(h);
                return d(i, b, c), g(i, c), f(i, c), e(i, c), i
            }

            function d(a, b, c) {
                function d() {
                    a.addClass("edit-mode"), h.focus()
                }

                function e() {
                    a.removeClass("edit-mode")
                }

                function f(a) {
                    h.val() != a && h.val(a), g.html(a), c()
                }

                var g = a.find(".title"), h = a.find(".title-edit input"), i = a.find(".title.not-bought");
                i.click(function () {
                    d()
                }), h.focusout(function () {
                    e()
                }), h.on("input", function () {
                    f(h.val())
                }), f(b)
            }

            function e(a, b) {
                var c = a.find(".delete-button");
                c.click(function () {
                    a.slideUp(function () {
                        a.remove(), b()
                    })
                })
            }

            function f(a, c) {
                function d(d) {
                    b(e, function () {
                        a.removeClass(i).removeClass(j), a.addClass(d), c()
                    })
                }

                var e = a.find(".inner-part"), f = a.find(".buy-button"), g = a.find(".unbuy-button");
                f.click(function () {
                    d(i)
                }), g.click(function () {
                    d(j)
                })
            }

            function g(a, c) {
                function d() {
                    return parseInt(f.html())
                }

                function e(a, d) {
                    function e() {
                        f.html("" + a), 1 == a ? h.prop("disabled", !0) : h.prop("disabled", !1), c()
                    }

                    d ? e() : b(f, e)
                }

                var f = a.find(".count-label"), g = a.find(".plus-button"), h = a.find(".minus-button");
                g.click(function () {
                    e(d() + 1)
                }), h.click(function () {
                    var a = d();
                    a > 1 && e(d() - 1)
                }), e(1, !0)
            }

            var h = null, i = "state-bought", j = "state-not-bought";
            return c
        }

        c.createRow = d($)
    }, {}], 2: [function (a, b, c) {
        function d(b) {
            function c(a) {
                var b = f.createRow(a, e);
                g.append(b), b.hide(), b.slideDown(function () {
                    e()
                })
            }

            function d() {
                function a() {
                    var a = e.val();
                    a && a.length && (c(a), e.val(""), e.focus())
                }

                var d = b(".new-item"), e = d.find("input"), f = d.find("button");
                f.click(function () {
                    a()
                }), e.keyup(function (b) {
                    13 == b.keyCode && a()
                })
            }

            function e() {
                function a(a, c) {
                    a.html(""), c.each(function (c, d) {
                        d = b(d);
                        var e = d.find(".title").html(), f = d.find(".count-label").html(), g = b(j);
                        g.find(".title").html(e), g.find(".count").html(f), a.append(g)
                    })
                }

                a(h, g.find(".item-row.state-bought")), a(i, g.find(".item-row.state-not-bought"))
            }

            var f = a("./OneRow"), g = b(".items-list"), h = b(".stats-bought"), i = b(".stats-not-bought"),
                j = b(".stats-template").html();
            d(), c("Помідори"), c("Печиво"), c("Сир")
        }

        $(function () {
            d($)
        })
    }, {"./OneRow": 1}]
}, {}, [2]);
*/