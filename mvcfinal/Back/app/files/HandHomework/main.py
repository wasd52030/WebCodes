import covid19
import railway
import bus
import LinearCorrelation
import os

if __name__ == "__main__":

    if not os.path.exists(f"./Plots"):
        os.mkdir(f"./Plots")

    if not os.path.exists(f"./DataTable"):
        os.mkdir(f"./DataTable")

    covid19.AnalysisAndPlot()
    railway.AnalysisAndPlot()
    bus.AnalysisAndPlot()
    LinearCorrelation.AnalysisAndPlot()

    print("圖表輸出完成!")
    print("數據報表輸出完成!")
