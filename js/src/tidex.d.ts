import Exchange from './abstract/tidex.js';
import { Dictionary, Int, OrderBook, OrderSide, OrderType, Ticker } from './base/types.js';
/**
 * @class tidex
 * @extends Exchange
 */
export default class tidex extends Exchange {
    describe(): any;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchMarkets(params?: {}): Promise<any[]>;
    parseBalance(response: any): import("./base/types.js").Balances;
    fetchBalance(params?: {}): Promise<import("./base/types.js").Balances>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    fetchOrderBooks(symbols?: string[], limit?: Int, params?: {}): Promise<Dictionary<OrderBook>>;
    parseTicker(ticker: any, market?: any): Ticker;
    fetchTickers(symbols?: string[], params?: {}): Promise<Dictionary<Ticker>>;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    parseTrade(trade: any, market?: any): {
        id: string;
        order: string;
        timestamp: number;
        datetime: string;
        symbol: any;
        type: string;
        side: string;
        takerOrMaker: any;
        price: number;
        amount: number;
        cost: number;
        fee: any;
        info: any;
    };
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<import("./base/types.js").Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    parseOrderStatus(status: any): string;
    parseOrder(order: any, market?: any): import("./base/types.js").Order;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<import("./base/types.js").Order>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Order[]>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<import("./base/types.js").Trade[]>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        id: string;
        txid: any;
        timestamp: any;
        datetime: any;
        network: any;
        addressFrom: any;
        address: any;
        addressTo: any;
        amount: any;
        type: any;
        currency: any;
        status: any;
        updated: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: any;
        fee: any;
        info: any;
    }>;
    parseTransaction(transaction: any, currency?: any): {
        id: string;
        txid: any;
        timestamp: any;
        datetime: any;
        network: any;
        addressFrom: any;
        address: any;
        addressTo: any;
        amount: any;
        type: any;
        currency: any;
        status: any;
        updated: any;
        tagFrom: any;
        tag: any;
        tagTo: any;
        comment: any;
        fee: any;
        info: any;
    };
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
