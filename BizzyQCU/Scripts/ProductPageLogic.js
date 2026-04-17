$(document).ready(function () {
    $("#productSearch, .filter-dropdown").on("keyup change", function () {
        var searchText = $("#productSearch").val().toLowerCase();
        var category = $("#category").val().toLowerCase();
        var price = $("#priceRange").val().toLowerCase();
        var popularity = $("#popularity").val().toLowerCase(); // NEW

        $(".product-card").each(function () {
            var cardText = $(this).text().toLowerCase();
            
            var matchSearch = cardText.indexOf(searchText) > -1;
            var matchCategory = category === "" || $(this).hasClass(category);
            var matchPrice = price === "" || $(this).hasClass(price);
            var matchPopularity = popularity === "" || $(this).hasClass(popularity); // NEW

            // Include matchPopularity in the check
            if (matchSearch && matchCategory && matchPrice && matchPopularity) {
                $(this).closest('.col-md-4').fadeIn(200);
            } else {
                $(this).closest('.col-md-4').fadeOut(200);
            }
        });
    });
});
