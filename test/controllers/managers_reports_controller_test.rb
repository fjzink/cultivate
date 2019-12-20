require 'test_helper'

class ManagersReportsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @managers_report = managers_reports(:one)
  end

  test "should get index" do
    get managers_reports_url, as: :json
    assert_response :success
  end

  test "should create managers_report" do
    assert_difference('ManagersReport.count') do
      post managers_reports_url, params: { managers_report: { manager_id: @managers_report.manager_id, report_id: @managers_report.report_id } }, as: :json
    end

    assert_response 201
  end

  test "should show managers_report" do
    get managers_report_url(@managers_report), as: :json
    assert_response :success
  end

  test "should update managers_report" do
    patch managers_report_url(@managers_report), params: { managers_report: { manager_id: @managers_report.manager_id, report_id: @managers_report.report_id } }, as: :json
    assert_response 200
  end

  test "should destroy managers_report" do
    assert_difference('ManagersReport.count', -1) do
      delete managers_report_url(@managers_report), as: :json
    end

    assert_response 204
  end
end
