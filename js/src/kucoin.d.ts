import Exchange from './abstract/kucoin.js';
import { Int, OrderSide, OrderType, Order, OHLCV, Trade, Balances, OrderRequest } from './base/types.js';
/**
 * @class kucoin
 * @extends Exchange
 */
export default class kucoin extends Exchange {
    describe(): any;
    nonce(): number;
    fetchTime(params?: {}): Promise<number>;
    fetchStatus(params?: {}): Promise<{
        status: string;
        updated: any;
        eta: any;
        url: any;
        info: any;
    }>;
    fetchMarkets(params?: {}): Promise<any[]>;
    fetchCurrencies(params?: {}): Promise<{}>;
    fetchAccounts(params?: {}): Promise<any[]>;
    fetchTransactionFee(code: string, params?: {}): Promise<{
        info: any;
        withdraw: {};
        deposit: {};
    }>;
    fetchDepositWithdrawFee(code: string, params?: {}): Promise<{
        info: any;
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
    }>;
    parseDepositWithdrawFee(fee: any, currency?: any): {
        info: any;
        withdraw: {
            fee: any;
            percentage: any;
        };
        deposit: {
            fee: any;
            percentage: any;
        };
        networks: {};
    };
    isFuturesMethod(methodName: any, params: any): boolean;
    parseTicker(ticker: any, market?: any): import("./base/types.js").Ticker;
    fetchTickers(symbols?: string[], params?: {}): Promise<import("./base/types.js").Dictionary<import("./base/types.js").Ticker>>;
    fetchTicker(symbol: string, params?: {}): Promise<import("./base/types.js").Ticker>;
    parseOHLCV(ohlcv: any, market?: any): number[];
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    createDepositAddress(code: string, params?: {}): Promise<{
        info: any;
        currency: any;
        address: string;
        tag: string;
        network: string;
    }>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        info: any;
        currency: any;
        address: string;
        tag: string;
        network: string;
    }>;
    parseDepositAddress(depositAddress: any, currency?: any): {
        info: any;
        currency: any;
        address: string;
        tag: string;
        network: string;
    };
    fetchDepositAddressesByNetwork(code: string, params?: {}): Promise<{}>;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<import("./base/types.js").OrderBook>;
    handleTriggerPrices(params: any): any[];
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): Promise<Order>;
    createOrders(orders: OrderRequest[], params?: {}): Promise<Order[]>;
    createOrderRequest(symbol: string, type: OrderType, side: OrderSide, amount: any, price?: any, params?: {}): any;
    editOrder(id: string, symbol: any, type: any, side: any, amount?: any, price?: any, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: string, params?: {}): Promise<any>;
    cancelAllOrders(symbol?: string, params?: {}): Promise<any>;
    fetchOrdersByStatus(status: any, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOrder(id: string, symbol?: string, params?: {}): Promise<Order>;
    parseOrder(order: any, market?: any): Order;
    fetchOrderTrades(id: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchMyTrades(symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseTrade(trade: any, market?: any): Trade;
    fetchTradingFee(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: any;
        maker: number;
        taker: number;
        percentage: boolean;
        tierBased: boolean;
    }>;
    withdraw(code: string, amount: any, address: any, tag?: any, params?: {}): Promise<{
        info: any;
        id: string;
        timestamp: number;
        datetime: string;
        network: string;
        address: string;
        addressTo: string;
        addressFrom: any;
        tag: string;
        tagTo: string;
        tagFrom: any;
        currency: any;
        amount: number;
        txid: string;
        type: string;
        status: string;
        comment: string;
        fee: any;
        updated: number;
    }>;
    parseTransactionStatus(status: any): string;
    parseTransaction(transaction: any, currency?: any): {
        info: any;
        id: string;
        timestamp: number;
        datetime: string;
        network: string;
        address: string;
        addressTo: string;
        addressFrom: any;
        tag: string;
        tagTo: string;
        tagFrom: any;
        currency: any;
        amount: number;
        txid: string;
        type: string;
        status: string;
        comment: string;
        fee: any;
        updated: number;
    };
    fetchDeposits(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    fetchWithdrawals(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBalanceHelper(entry: any): import("./base/types.js").Balance;
    fetchBalance(params?: {}): Promise<Balances>;
    transfer(code: string, amount: any, fromAccount: any, toAccount: any, params?: {}): Promise<{
        id: string;
        currency: any;
        timestamp: number;
        datetime: string;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
        info: any;
    }>;
    parseTransfer(transfer: any, currency?: any): {
        id: string;
        currency: any;
        timestamp: number;
        datetime: string;
        amount: number;
        fromAccount: string;
        toAccount: string;
        status: string;
        info: any;
    };
    parseTransferStatus(status: any): string;
    parseLedgerEntryType(type: any): string;
    parseLedgerEntry(item: any, currency?: any): {
        id: string;
        direction: string;
        account: string;
        referenceId: any;
        referenceAccount: string;
        type: string;
        currency: any;
        amount: number;
        timestamp: number;
        datetime: string;
        before: any;
        after: any;
        status: any;
        fee: any;
        info: any;
    };
    fetchLedger(code?: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    calculateRateLimiterCost(api: any, method: any, path: any, params: any, config?: {}): any;
    fetchBorrowRateHistory(code: string, since?: Int, limit?: Int, params?: {}): Promise<any>;
    parseBorrowRateHistory(response: any, code: any, since: any, limit: any): any;
    parseBorrowRate(info: any, currency?: any): {
        currency: any;
        rate: number;
        period: number;
        timestamp: string;
        datetime: string;
        info: any;
    };
    fetchBorrowInterest(code?: string, symbol?: string, since?: Int, limit?: Int, params?: {}): Promise<any[]>;
    parseBorrowInterest(info: any, market?: any): {
        symbol: string;
        marginMode: string;
        currency: any;
        interest: any;
        interestRate: number;
        amountBorrowed: any;
        timestamp: number;
        datetime: string;
        info: any;
    };
    borrowMargin(code: string, amount: any, symbol?: string, params?: {}): Promise<{
        id: string;
        currency: any;
        amount: number;
        symbol: any;
        timestamp: number;
        datetime: string;
        info: any;
    }>;
    repayMargin(code: string, amount: any, symbol?: string, params?: {}): Promise<{
        id: string;
        currency: any;
        amount: number;
        symbol: any;
        timestamp: number;
        datetime: string;
        info: any;
    }>;
    parseMarginLoan(info: any, currency?: any): {
        id: string;
        currency: any;
        amount: number;
        symbol: any;
        timestamp: number;
        datetime: string;
        info: any;
    };
    fetchDepositWithdrawFees(codes?: string[], params?: {}): Promise<any>;
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: any;
        method: string;
        body: any;
        headers: any;
    };
    handleErrors(code: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
