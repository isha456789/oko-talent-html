export class Select {
  init() {
    this.EnquirySelect();
  }

  EnquirySelect() {
    $(document).ready(function () {
        $(".enquiry-select").select2({
            closeOnSelect: true,
            minimumResultsForSearch: Infinity,
            allowClear: false,
            dropdownCssClass: "categories-select2",
        });
    });
  }
}
