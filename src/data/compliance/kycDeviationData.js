export const kycAccounts = [
  { accountId: 'ACC-1001', declaredIncome: 45000, declaredAssets: 120000, declaredFinancialAssets: 80000, netDeposits30d: 62000, incomeRatio: 137.8, assetRatio: 51.7, financialAssetRatio: 77.5, flagged: true },
  { accountId: 'ACC-2034', declaredIncome: 72000, declaredAssets: 250000, declaredFinancialAssets: 150000, netDeposits30d: 98000, incomeRatio: 136.1, assetRatio: 39.2, financialAssetRatio: 65.3, flagged: true },
  { accountId: 'ACC-3078', declaredIncome: 38000, declaredAssets: 95000, declaredFinancialAssets: 55000, netDeposits30d: 82000, incomeRatio: 215.8, assetRatio: 86.3, financialAssetRatio: 149.1, flagged: true },
  { accountId: 'ACC-4512', declaredIncome: 120000, declaredAssets: 500000, declaredFinancialAssets: 350000, netDeposits30d: 185000, incomeRatio: 154.2, assetRatio: 37.0, financialAssetRatio: 52.9, flagged: true },
  { accountId: 'ACC-5190', declaredIncome: 95000, declaredAssets: 320000, declaredFinancialAssets: 200000, netDeposits30d: 24000, incomeRatio: 25.3, assetRatio: 7.5, financialAssetRatio: 12.0, flagged: false },
  { accountId: 'ACC-6247', declaredIncome: 55000, declaredAssets: 180000, declaredFinancialAssets: 110000, netDeposits30d: 12000, incomeRatio: 21.8, assetRatio: 6.7, financialAssetRatio: 10.9, flagged: false },
  { accountId: 'ACC-7803', declaredIncome: 150000, declaredAssets: 800000, declaredFinancialAssets: 500000, netDeposits30d: 35000, incomeRatio: 23.3, assetRatio: 4.4, financialAssetRatio: 7.0, flagged: false },
  { accountId: 'ACC-8391', declaredIncome: 68000, declaredAssets: 210000, declaredFinancialAssets: 140000, netDeposits30d: 18000, incomeRatio: 26.5, assetRatio: 8.6, financialAssetRatio: 12.9, flagged: false }
]

export const kycParams = [
  { name: 'KYC_income_threshold', value: '30%', description: 'Alert if 30-day net deposits exceed this percentage of declared annual income' },
  { name: 'KYC_asset_threshold', value: '30%', description: 'Alert if 30-day net deposits exceed this percentage of declared total assets' },
  { name: 'KYC_f_asset_threshold', value: '30%', description: 'Alert if 30-day net deposits exceed this percentage of declared financial assets' }
]
