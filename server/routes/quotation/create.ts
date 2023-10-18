import { prisma } from "~~/prisma/db";

export default defineEventHandler(async (event) => {
  const { name, number, date, customer, bank, currency, valid_until, cost_centre, series, items, vat, cost_excluding_vat, cost_including_vat, total_costs, non_taxable_amount, selectedTerm } = await readBody(event);

  let json = items.map((item) => ({
    item: item.item,
    vehicle: item.vehicle,
    quantity: item.quantity,
    rate: item.rate,
    amount: item.amount,
    chargeable_mileage: item.chargeable_mileage,
    opening_mileage: item.opening_mileage,
    closing_mileage: item.closing_mileage,
    actual_milege: item.actual_milege,
    total_free_mileage: item.total_free_mileage,
    uom: item.uom,
    date_outgoing: item.date_outgoing,
    date_incoming: item.date_incoming,
    duration: item.duration

  }));

  const createInvoice = await prisma.quotation.create({
      data: {
        name: name,
        number: number,
        currency: currency,
        cost_center: cost_centre,
        series: series,
        date: date,
        customer: customer,
        bank: bank,
        cost_including_vat: cost_including_vat,
        total_costs: total_costs,
        valid_until: valid_until,
        non_taxable_amount: non_taxable_amount,
        cost_excluding_vat: cost_excluding_vat,
        vat: vat,
        items: json,
        terms: selectedTerm,

      },
    }).catch((error) => {
      console.error(error);
      return {
        success: false
      }
    });
    console.log("Items are", items);
    return {
      data: createInvoice,
      success: true
    };
});