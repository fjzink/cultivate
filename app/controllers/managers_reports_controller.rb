class ManagersReportsController < ApplicationController
  before_action :set_managers_report, only: [:show, :update, :destroy]

  # GET /managers_reports
  def index
    @managers_reports = ManagersReport.all

    render json: @managers_reports
  end

  # GET /managers_reports/1
  def show
    render json: @managers_report
  end

  # POST /managers_reports
  def create
    @managers_report = ManagersReport.new(managers_report_params)

    if @managers_report.save
      render json: @managers_report, status: :created, location: @managers_report
    else
      render json: @managers_report.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /managers_reports/1
  def update
    if @managers_report.update(managers_report_params)
      render json: @managers_report
    else
      render json: @managers_report.errors, status: :unprocessable_entity
    end
  end

  # DELETE /managers_reports/1
  def destroy
    @managers_report.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_managers_report
      @managers_report = ManagersReport.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def managers_report_params
      params.require(:managers_report).permit(:manager_id, :report_id)
    end
end
