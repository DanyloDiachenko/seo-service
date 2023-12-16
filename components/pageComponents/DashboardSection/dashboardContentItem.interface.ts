export default interface IDashboardItem {
	id: number;
	keyword: string;
	isFeatureSelected: boolean;
	
	position: number;
	positionWasDiffernce?: number;
	positionNowDifference?: number;

	estTrafic: number;
	estTraficWasDiffernce?: number;
	estTraficNowDifference?: number;

	volume: number;
	volumeWasDiffernce?: number;
	volumeNowDiffernce?: number;

	bestPageRoute: string;
	bestPageLink: string;
	updatedAt: Date;
};