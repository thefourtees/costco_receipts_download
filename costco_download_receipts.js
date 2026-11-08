//////////////////////
// QUERIES
//////////////////////
const Query = (function() {
    const receiptsWithCounts = {
      name: 'receiptsWithCounts',
      query: `{"query":"query 
        receiptsWithCounts($startDate: String!, $endDate: String!, $documentType: String!, $documentSubType: String!) {
            receiptsWithCounts(startDate: $startDate, endDate: $endDate, documentType: $documentType, documentSubType: $documentSubType) {
                receipts {
                    warehouseName
                    receiptType
                    documentType
                    transactionDateTime
                    transactionDate
                    companyNumber
                    warehouseNumber
                    operatorNumber
                    warehouseName
                    warehouseShortName
                    registerNumber
                    transactionNumber
                    transactionType
                    transactionBarcode
                    total
                    warehouseAddress1
                    warehouseAddress2
                    warehouseCity
                    warehouseState
                    warehouseCountry
                    warehousePostalCode
                    totalItemCount
                    subTotal
                    taxes
                    total
                    invoiceNumber
                    sequenceNumber
                    itemArray {
                        itemNumber
                        itemDescription01
                        unit
                        amount
                        taxFlag
                        fuelUnitQuantity
                        itemUnitPriceAmount
                        fuelUomCode
                        ${/*
                        frenchItemDescription1
                        itemDescription02
                        frenchItemDescription2
                        itemIdentifier
                        itemDepartmentNumber
                        merchantID
                        entryMethod
                        transDepartmentNumber
                        fuelGradeCode
                        fuelUomDescription
                        fuelUomDescriptionFr
                        fuelGradeDescription
                        fuelGradeDescriptionFr
                        */''}
                    }
                    tenderArray {
                        tenderTypeCode
                        tenderSubTypeCode
                        tenderDescription
                        amountTender
                        displayAccountNumber
                        sequenceNumber
                        approvalNumber
                        responseCode
                        tenderTypeName
                        transactionID
                        merchantID
                        entryMethod
                        tenderAcctTxnNumber
                        tenderAuthorizationCode
                        tenderTypeName
                        tenderTypeNameFr
                        tenderEntryMethodDescription
                    }
                    subTaxes {
                        tax1
                        tax2
                        tax3
                        tax4
                        aTaxPercent
                        aTaxLegend
                        aTaxAmount
                        aTaxPrintCode
                        aTaxPrintCodeFR
                        aTaxIdentifierCode
                        bTaxPercent
                        bTaxLegend
                        bTaxAmount
                        bTaxPrintCode
                        bTaxPrintCodeFR
                        bTaxIdentifierCode
                        cTaxPercent
                        cTaxLegend
                        cTaxAmount
                        cTaxIdentifierCode
                        dTaxPercent
                        dTaxLegend
                        dTaxAmount
                        dTaxPrintCode
                        dTaxPrintCodeFR
                        dTaxIdentifierCode
                        uTaxLegend
                        uTaxAmount
                        uTaxableAmount
                    }
                    instantSavings
                    membershipNumber
                }
            }
        }","variables":{"startDate":"1/01/2026","endDate":"11/08/2026","documentType":"all","documentSubType":"all"}}`
    };

    const getOnlineOrders = {
    name: 'getOnlineOrders',
    query: `{"query":"query 
        getOnlineOrders($startDate: String!, $endDate: String!, $pageNumber: Int , $pageSize: Int, $warehouseNumber: String!) {
            getOnlineOrders(startDate: $startDate, endDate: $endDate, pageNumber: $pageNumber, pageSize: $pageSize, warehouseNumber: $warehouseNumber) {
              pageNumber
              pageSize
              totalNumberOfRecords
              bcOrders {
                orderHeaderId
                orderPlacedDate : orderedDate
                orderNumber : sourceOrderNumber 
                orderTotal
                warehouseNumber
                status
                emailAddress
                orderCancelAllowed
                orderPaymentFailed : orderPaymentEditAllowed
                orderReturnAllowed
                orderLineItems {
                  orderLineItemCancelAllowed
                  orderLineItemId
                  orderReturnAllowed
                  itemId
                  itemNumber
                  itemTypeId
                  lineNumber
                  itemDescription
                  deliveryDate
                  warehouseNumber
                  status
                  orderStatus
                  parentOrderLineItemId
                  isFSAEligible
                  shippingType
                  shippingTimeFrame
                  isShipToWarehouse
                  carrierItemCategory
                  carrierContactPhone
                  programTypeId
                  isBuyAgainEligible
                  scheduledDeliveryDate
                  scheduledDeliveryDateEnd
                  configuredItemData
                  shipment {
                    shipmentId             
                    orderHeaderId
                    orderShipToId 
                    lineNumber 
                    orderNumber
                    shippingType 
                    shippingTimeFrame 
                    shippedDate 
                    packageNumber 
                    trackingNumber 
                    trackingSiteUrl 
                    carrierName         
                    estimatedArrivalDate 
                    deliveredDate 
                    isDeliveryDelayed 
                    isEstimatedArrivalDateEligible 
                    statusTypeId 
                    status 
                    pickUpReadyDate
                    pickUpCompletedDate
                    reasonCode
                    trackingEvent {
                      event
                      carrierName
                      eventDate
                      estimatedDeliveryDate
                      scheduledDeliveryDate
                      trackingNumber
                    }
                  }
                }
              }
            }
        }","variables":{"pageNumber":1,"pageSize":10,"startDate":"2026-1-01","endDate":"2026-11-08","warehouseNumber":"894"}}`
    };

    const getOrderDetails = {
      name: 'getOrderDetails',
      query: `{"query":"query 
        getOrderDetails($orderNumbers: [String]) {
              getOrderDetails(orderNumbers:$orderNumbers) {
                warehouseNumber
                orderNumber : sourceOrderNumber 
                orderPlacedDate : orderedDate
                status
                locale
                orderReturnAllowed
                shopCardAppliedAmount
                giftOfMembershipAppliedAmount
                orderCancelAllowed
                orderPaymentFailed : orderPaymentEditAllowed
                orderShippingEditAllowed
                merchandiseTotal
                retailDeliveryFee
                shippingAndHandling
                grocerySurcharge
                frozenSurchargeFee
                uSTaxTotal1
                foreignTaxTotal1
                foreignTaxTotal2
                foreignTaxTotal3
                foreignTaxTotal4  
                orderTotal
                firstName
                lastName
                line1
                line2
                line3
                city
                state
                postalCode
                countryCode
                companyName
                emailAddress
                phoneNumber
                membershipNumber
                nonMemberSurchargeAmount
                discountAmount
                retailDeliveryFees {
                  key
                  value
                }
                orderPayment {
                  paymentType
                  totalCharged
                  cardExpireMonth
                  cardExpireYear
                  nameOnCard
                  cardNumber
                  isGOMPayment
                  storedValueBucket
                }
                shipToAddress : orderShipTos {
                  referenceNumber
                  firstName
                  lastName
                  line1
                  line2
                  line3
                  city
                  state
                  postalCode
                  countryCode
                  companyName
                  emailAddress
                  phoneNumber : contactPhone
                  isShipToWarehouse
                  addressWarehouseName
                  giftMessage
                  giftToFirstName
                  giftToLastName
                  giftFromName
                  orderLineItems {
                    shipToWarehousePackageStatus
                    orderStatus
                    orderNumber
                    orderedDate
                    itemTypeId
                    isFeeItem
                    orderLineItemCancelAllowed
                    estimatedDeliveryDate
                    supplierAvailabilityDate
                    fulfilledBy  
                    itemNumber
                    itemDescription : sourceItemDescription
                    price : unitPrice
                    quantity : orderedTotalQuantity
                    merchandiseTotalAmount
                    lineItemId
                    sourceLineItemId
                    parentOrderLineItemId
                    itemId
                    isBuyAgainEligible
                    sequenceNumber : sourceSequenceNumber
                    parentOrderNumber
                    lineNumber
                    itemTypeId
                    replaceStatus
                    returnType
                    itemType
                    programType
                    minOrderDate
                    maxOrderDate
                    fSADescription
                    odsJobId
                    orderedShipMethodDescription
                    shippingChargeAmount
                    preferredArrivalDate
                    requestedDeliveryDate
                    returnStatus
                    productSerialNumber
                    configuredItemData
                    orderedShipMethod
                    isRescheduleEligible
                    deliveryReschedulingSite
                    scheduledDeliveryDate
                    scheduledDeliveryDateEnd
                    limitedReturnPolicyRule
                    isLimitedReturnPolicyExceeded
                    itemWeight
                    itemGroupNumber
                    isPerishable
                    carrierItemCategory
                    carrierContactPhone
                    isUPSMILabelEligible
                    parentLineNumber
                    isExchangeBlock
                    shipToAddressReferenceNumber
                    isVerificationRequired
                    isDept24
                    returnableQuantity
                    totalReturnedQuantity
                    exchangeOrderNumber
                    returnType
                    isGiftMessageSupported
                    isReturnCalendarEligible
                    programTypeId
                    bundleParentNumber, freightSavings, freightAdditionalSavings
                    configuredItemData
                    itemStatus {
                      orderPlaced {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      shipped {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      cancelled {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      returned {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      delivered {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                      cancellationRequested {
                        quantity
                        transactionDate
                        orderLineItemId
                        lineItemStatusId
                        orderLineItemCancelAllowed
                        orderLineItemReturnAllowed
                      }
                    }
                    shipment {
                      lineNumber
                      orderNumber                    
                      packageNumber
                      trackingNumber
                      pickUpCompletedDate
                      pickUpReadyDate
                      carrierName
                      trackingSiteUrl
                      shippedDate
                      estimatedArrivalDate
                      deliveredDate
                      isDeliveryDelayed
                      isEstimatedArrivalDateEligible
                      reasonCode
                      trackingEvent {
                        event
                        carrierName
                        eventDate
                        estimatedDeliveryDate
                        scheduledDeliveryDate
                        trackingNumber
                      }
                    }
                  }
                }
              }
            }","variables":{"orderNumbers":["1234567890"]}}`
      };

  return {receiptsWithCounts, getOnlineOrders, getOrderDetails};
})();

//////////////////////
// CONFIGURATION
//////////////////////
// Edit these values before running. Dates use Costco's expected M/D/YYYY format.
const COSTCO_EXPORT_CONFIG = {
  startDate: "1/01/2026",
  endDate: "11/08/2026",
  documentType: "all",
  documentSubType: "all",
  warehouseNumber: "894",
  onlineOrderPageSize: 50,
  includeOrderDetails: false, // Set true to retrieve full detail for every online order.
  exportAfterDownload: true,
  fileNamePrefix: "costco_purchase_history",
  // Sensitive fields are excluded from exports by default.
  includeSensitiveFields: false
};

//////////////////////
// XHR
//////////////////////
const COSTCO_GRAPHQL_URL = "https://ecom-api.costco.com/ebusiness/order/v1/orders/graphql";

const queryCostcoOrders = async (query, variablesOverride = {}) => {
  if (!localStorage.idToken || !localStorage.clientID) {
    throw new Error("Costco authentication values were not found. Sign in to Costco.com and run this script in that tab.");
  }

  // The original query definitions wrap GraphQL in a JSON-looking template
  // string containing literal newlines. That is not valid JSON, so do not
  // pass the whole wrapper to JSON.parse(). Extract the GraphQL document and
  // parse only the variables object (which is valid JSON).

  const rawQuery = query.query;
  const queryMarker = '"query":"';
  const variablesMarker = '","variables":';

  const queryStart = rawQuery.indexOf(queryMarker);
  const variablesStart = rawQuery.indexOf(
    variablesMarker,
    queryStart + queryMarker.length
  );

  if (queryStart < 0 || variablesStart < 0) {
    throw new Error(`Could not read the ${query.name} GraphQL query definition.`);
  }

  const graphqlDocument = rawQuery.slice(
    queryStart + queryMarker.length,
    variablesStart
  );
  const variablesStartIndex = variablesStart + variablesMarker.length;
  const variablesEndIndex = rawQuery.lastIndexOf('}');
  const baseVariables = JSON.parse(
    rawQuery.slice(variablesStartIndex, variablesEndIndex)
  );

  const payload = {
    query: graphqlDocument.replaceAll(/\s+/g, ' ').trim(),
    variables: { ...baseVariables, ...variablesOverride }
  };

  const response = await fetch(COSTCO_GRAPHQL_URL, {
    headers: {
      "accept": "*/*",
      "client-identifier": "481b1aec-aa3b-454b-b81b-48187e28f205",
      "content-type": "application/json-patch+json",
      "costco-x-authorization": `Bearer ${localStorage.idToken}`,
      "costco-x-wcs-clientid": localStorage.clientID,
      "costco.env": "ecom",
      "costco.service": "restOrders"
    },
    referrer: "https://www.costco.com/",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: JSON.stringify(payload),
    method: "POST",
    mode: "cors",
    credentials: "omit"
  });

  if (!response.ok) throw new Error(`Costco API request failed: HTTP ${response.status}`);
  const json = await response.json();
  if (json.errors?.length) throw new Error(`Costco GraphQL error: ${json.errors.map(e => e.message).join("; ")}`);
  if (!json.data || !(query.name in json.data)) {
    throw new Error(`Unexpected Costco API response for ${query.name}: ${JSON.stringify(json).slice(0, 700)}`);
  }
  return json.data[query.name];
};

// Keep the original query functions available, now accepting optional variable overrides.
window.receiptsWithCounts = (overrides = {}) => queryCostcoOrders(Query.receiptsWithCounts, {
  startDate: COSTCO_EXPORT_CONFIG.startDate,
  endDate: COSTCO_EXPORT_CONFIG.endDate,
  documentType: COSTCO_EXPORT_CONFIG.documentType,
  documentSubType: COSTCO_EXPORT_CONFIG.documentSubType,
  ...overrides
});

window.getOnlineOrders = (overrides = {}) => queryCostcoOrders(Query.getOnlineOrders, {
  startDate: COSTCO_EXPORT_CONFIG.startDate,
  endDate: COSTCO_EXPORT_CONFIG.endDate,
  warehouseNumber: COSTCO_EXPORT_CONFIG.warehouseNumber,
  pageNumber: 1,
  pageSize: COSTCO_EXPORT_CONFIG.onlineOrderPageSize,
  ...overrides
});

window.getOrderDetails = (orderNumbers = []) => {
  if (!Array.isArray(orderNumbers)) orderNumbers = [orderNumbers];
  return queryCostcoOrders(Query.getOrderDetails, { orderNumbers });
};

//////////////////////
// DATE + DATA HELPERS
//////////////////////
const costcoDateToApi = value => {
  if (value instanceof Date) {
    const m = value.getMonth() + 1, d = value.getDate(), y = value.getFullYear();
    return `${m}/${d}/${y}`;
  }
  const text = String(value).trim();
  // Accept YYYY-MM-DD from date inputs and convert to M/D/YYYY.
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text);
  return iso ? `${Number(iso[2])}/${Number(iso[3])}/${iso[1]}` : text;
};

const validateCostcoDateRange = (startDate, endDate) => {
  const parse = s => {
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(costcoDateToApi(s));
    if (!m) throw new Error(`Invalid date: ${s}. Use M/D/YYYY or YYYY-MM-DD.`);
    return new Date(Number(m[3]), Number(m[1]) - 1, Number(m[2]));
  };
  if (parse(startDate) > parse(endDate)) throw new Error("Start date must be on or before end date.");
};

const flattenObject = (value, prefix = "", output = {}) => {
  if (value === null || value === undefined) {
    if (prefix) output[prefix] = "";
    return output;
  }
  if (Array.isArray(value)) {
    output[prefix] = JSON.stringify(value);
    return output;
  }
  if (typeof value !== "object") {
    if (prefix) output[prefix] = value;
    return output;
  }
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (child && typeof child === "object" && !Array.isArray(child)) {
      flattenObject(child, path, output);
    } else {
      output[path] = Array.isArray(child) ? JSON.stringify(child) : (child ?? "");
    }
  }
  return output;
};

const isSensitiveField = key =>
  /^(membershipNumber|emailAddress|email|phoneNumber|phone|cardNumber|displayAccountNumber|accountNumber|approvalNumber|tenderAuthorizationCode|authorizationCode|transactionID|giftMessage|giftToFirstName|giftToLastName|giftFromName|firstName|lastName|line1|line2|line3|city|state|postalCode)$/i
    .test(String(key).split(".").pop());

const exportSafeObject = object => {
  if (COSTCO_EXPORT_CONFIG.includeSensitiveFields) return object;
  const clean = {};
  for (const [key, value] of Object.entries(object || {})) {
    if (isSensitiveField(key)) continue;
    if (Array.isArray(value)) {
      clean[key] = value.map(v =>
        v && typeof v === "object" ? exportSafeObject(v) : v
      );
    } else if (value && typeof value === "object") {
      clean[key] = exportSafeObject(value);
    } else {
      clean[key] = value;
    }
  }
  return clean;
};

//////////////////////
// AUTOMATIC PAGINATION
//////////////////////
const getAllOnlineOrders = async ({
  startDate,
  endDate,
  pageSize = COSTCO_EXPORT_CONFIG.onlineOrderPageSize,
  warehouseNumber = COSTCO_EXPORT_CONFIG.warehouseNumber
} = {}) => {
  const allOrders = [];
  let pageNumber = 1;
  let expectedTotal = Infinity;

  while (allOrders.length < expectedTotal) {
    const page = await getOnlineOrders({
      startDate: costcoDateToApi(startDate ?? COSTCO_EXPORT_CONFIG.startDate),
      endDate: costcoDateToApi(endDate ?? COSTCO_EXPORT_CONFIG.endDate),
      warehouseNumber,
      pageNumber,
      pageSize
    });

    const batch = page?.bcOrders || [];
    allOrders.push(...batch);

    const reportedTotal = Number(page?.totalNumberOfRecords);
    if (Number.isFinite(reportedTotal)) expectedTotal = reportedTotal;

    console.info(
      `Costco online orders: page ${pageNumber}, received ${batch.length}, total ${allOrders.length}` +
      `${Number.isFinite(expectedTotal) ? `/${expectedTotal}` : ""}`
    );

    if (!batch.length || batch.length < pageSize || allOrders.length >= expectedTotal) {
      break;
    }
    pageNumber += 1;
  }

  return allOrders;
};
window.getAllOnlineOrders = getAllOnlineOrders;

//////////////////////
// EXPORT HELPERS
//////////////////////
const csvEscape = value => {
  let text = value === null || value === undefined
    ? ""
    : (typeof value === "object" ? JSON.stringify(value) : String(value));

  // Prevent spreadsheet formula execution when opening CSVs in Excel.
  if (/^[\s]*[=+@]/.test(text)) text = "'" + text;

  return `"${text.replace(/"/g, '""')}"`;
};

const rowsToCsv = rows => {
  const flattened = rows.map(row => flattenObject(exportSafeObject(row)));
  const headers = [...new Set(flattened.flatMap(row => Object.keys(row)))];

  if (!headers.length) return "";

  return [
    headers.map(csvEscape).join(","),
    ...flattened.map(row => headers.map(h => csvEscape(row[h])).join(","))
  ].join("\r\n");
};

const downloadTextFile = (filename, content, mimeType) => {
  const blob = new Blob(["\ufeff", content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();

  setTimeout(() => URL.revokeObjectURL(url), 1500);
};

const xmlEscape = value =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const excelColumn = n => {
  let name = "";
  while (n > 0) {
    const r = (n - 1) % 26;
    name = String.fromCharCode(65 + r) + name;
    n = Math.floor((n - 1) / 26);
  }
  return name;
};

const rowsToExcelXml = sheets => {
  const worksheetXml = Object.entries(sheets).map(([sheetName, rows]) => {
    const safeRows = rows.map(row => flattenObject(exportSafeObject(row)));
    const headers = [...new Set(safeRows.flatMap(row => Object.keys(row)))];
    const matrix = headers.length
      ? [headers, ...safeRows.map(row => headers.map(h => row[h] ?? ""))]
      : [["No data"]];

    const rowXml = matrix.map((cells, ri) =>
      `<Row>${cells.map((value, ci) => {
        const numeric = typeof value === "number" && Number.isFinite(value);
        const type = numeric ? "Number" : "String";
        const cell = numeric
          ? String(value)
          : xmlEscape(typeof value === "object" ? JSON.stringify(value) : value);

        return `<Cell ss:Index="${ci + 1}"><Data ss:Type="${type}">${cell}</Data></Cell>`;
      }).join("")}</Row>`
    ).join("");

    return `<Worksheet ss:Name="${xmlEscape(sheetName.slice(0, 31))}"><Table>${rowXml}</Table></Worksheet>`;
  }).join("");

  return `<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">${worksheetXml}</Workbook>`;
};

const exportCostcoData = ({
  receipts = [],
  onlineOrders = [],
  orderDetails = []
} = {}) => {

  // One spreadsheet row per purchased item. Receipt-level details are repeated
  // on each item row so every line remains traceable to its original receipt.
  const receiptItems = receipts.flatMap(receipt =>
    (receipt.itemArray || []).map(item => ({
      transactionDate: receipt.transactionDate,
      transactionDateTime: receipt.transactionDateTime,
      transactionNumber: receipt.transactionNumber,
      warehouseName: receipt.warehouseName,
      warehouseNumber: receipt.warehouseNumber,
      receiptType: receipt.receiptType,
      documentType: receipt.documentType,
      receiptSubtotal: receipt.subTotal,
      receiptTaxes: receipt.taxes,
      receiptTotal: receipt.total,

      ...item,

      itemNumber: item.itemNumber ?? "",
      itemDescription: item.itemDescription01 ?? item.itemDescription ?? "",
      price: item.itemUnitPriceAmount ?? item.unitPrice ?? "",
      amount: item.amount ?? "",
      unit: item.fuelUomCode
        ? item.fuelUnitQuantity
        : (item.unit ?? ""),
      taxFlag: item.taxFlag ?? "",
      fuelUnitQuantity: item.fuelUnitQuantity ?? "",
      fuelUomCode: item.fuelUomCode ?? ""
    }))
  );

  const onlineOrderItems = onlineOrders.flatMap(order =>
    (order.orderLineItems || []).map(item => ({
      orderNumber: order.orderNumber,
      orderPlacedDate: order.orderPlacedDate,
      orderStatus: order.status,
      orderTotal: order.orderTotal,
      ...item
    }))
  );

  const datasets = {
    receipts,
    receipt_items: receiptItems,
    online_orders: onlineOrders,
    online_order_items: onlineOrderItems,
    order_details: orderDetails
  };

  const prefix = COSTCO_EXPORT_CONFIG.fileNamePrefix;

  for (const [name, rows] of Object.entries(datasets)) {
    downloadTextFile(
      `${prefix}_${name}.csv`,
      rowsToCsv(rows),
      "text/csv;charset=utf-8"
    );
  }

  // SpreadsheetML is a multi-worksheet Excel workbook format and requires no third-party library.
  downloadTextFile(
    `${prefix}.xls`,
    rowsToExcelXml(datasets),
    "application/vnd.ms-excel;charset=utf-8"
  );

  console.info("Exported CSV files and a multi-sheet Excel-compatible workbook.");
  return datasets;
};
window.exportCostcoData = exportCostcoData;

//////////////////////
// MAIN DOWNLOAD
//////////////////////
const runCostcoExport = async (options = {}) => {
  const startDate = costcoDateToApi(
    options.startDate ?? COSTCO_EXPORT_CONFIG.startDate
  );
  const endDate = costcoDateToApi(
    options.endDate ?? COSTCO_EXPORT_CONFIG.endDate
  );

  validateCostcoDateRange(startDate, endDate);

  const pageSize = options.pageSize ?? COSTCO_EXPORT_CONFIG.onlineOrderPageSize;
  const warehouseNumber =
    options.warehouseNumber ?? COSTCO_EXPORT_CONFIG.warehouseNumber;

  console.info(
    `Retrieving Costco purchase history from ${startDate} through ${endDate}...`
  );

  const receiptResponse = await receiptsWithCounts({ startDate, endDate });
  const receipts = receiptResponse?.receipts || [];

  const onlineOrders = await getAllOnlineOrders({
    startDate,
    endDate,
    pageSize,
    warehouseNumber
  });

  let orderDetails = [];

  if (options.includeOrderDetails ?? COSTCO_EXPORT_CONFIG.includeOrderDetails) {
    const orderNumbers = onlineOrders
      .map(order => order.orderNumber)
      .filter(Boolean);

    // Keep request batches modest; the API accepts an array of order numbers.
    for (let i = 0; i < orderNumbers.length; i += 20) {
      const detailResponse = await getOrderDetails(
        orderNumbers.slice(i, i + 20)
      );

      orderDetails.push(
        ...(Array.isArray(detailResponse)
          ? detailResponse
          : detailResponse
            ? [detailResponse]
            : [])
      );
    }
  }

  const items = receipts.flatMap(receipt =>
    (receipt.itemArray || []).map(({ fuelUnitQuantity, unit, ...item }) => ({
      ...item,
      unit: item.fuelUomCode ? fuelUnitQuantity : unit
    }))
  );

  window.costcoReceipts = receipts;
  window.costcoReceiptItems = items;
  window.costcoOnlineOrders = onlineOrders;
  window.costcoOrderDetails = orderDetails;

  const receiptTotal = receipts.reduce(
    (sum, receipt) => sum + (Number(receipt.total) || 0),
    0
  );

  console.info(
    `Loaded ${receipts.length} warehouse receipts, ${items.length} receipt items, and ${onlineOrders.length} online orders.`
  );
  console.info(`Warehouse receipt total: ${receiptTotal.toFixed(2)}`);

  if (COSTCO_EXPORT_CONFIG.exportAfterDownload) {
    exportCostcoData({ receipts, onlineOrders, orderDetails });
  }

  return { receipts, items, onlineOrders, orderDetails, receiptTotal };
};

window.runCostcoExport = runCostcoExport;

// Backward-compatible helpers from the original script.
window.logReceiptItems = () =>
  console.table(window.costcoReceiptItems || []);

window.getReceiptsTotal = () =>
  (window.costcoReceipts || []).reduce(
    (sum, receipt) => sum + (Number(receipt.total) || 0),
    0
  );

console.log(
  "Costco export functions ready: runCostcoExport(), receiptsWithCounts(), getOnlineOrders(), getAllOnlineOrders(), getOrderDetails(), exportCostcoData(), logReceiptItems(), getReceiptsTotal()."
);
console.log(
  "Edit COSTCO_EXPORT_CONFIG at the top, then run: await runCostcoExport()."
);

// Automatically start, matching the original script's run-on-paste behavior.
// Set exportAfterDownload=false to load data without downloading files.
const costcoExportResult = await runCostcoExport();
